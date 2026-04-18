const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const GATEWAY_URL = 'https://connector-gateway.lovable.dev/resend';

interface ContactPayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) throw new Error('LOVABLE_API_KEY is not configured');

    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    if (!RESEND_API_KEY) throw new Error('RESEND_API_KEY is not configured');

    const body = (await req.json()) as Partial<ContactPayload>;
    const name = (body.name ?? '').toString().trim().slice(0, 100);
    const email = (body.email ?? '').toString().trim().slice(0, 255);
    const subject = (body.subject ?? '').toString().trim().slice(0, 200);
    const message = (body.message ?? '').toString().trim().slice(0, 1000);

    if (!name || !email || !message || !isValidEmail(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid input. Name, valid email, and message are required.' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const escape = (s: string) =>
      s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    const html = `
      <div style="font-family: Arial, sans-serif; color: #222; line-height: 1.5;">
        <h2 style="color:#0ea5e9;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escape(name)}</p>
        <p><strong>Email:</strong> ${escape(email)}</p>
        <p><strong>Subject:</strong> ${escape(subject || '(no subject)')}</p>
        <hr style="border:none;border-top:1px solid #eee;margin:16px 0;" />
        <p style="white-space: pre-wrap;">${escape(message)}</p>
      </div>
    `;

    const resp = await fetch(`${GATEWAY_URL}/emails`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        'X-Connection-Api-Key': RESEND_API_KEY,
      },
      body: JSON.stringify({
        from: 'CareBetween Contact <onboarding@resend.dev>',
        to: ['carebetweennonprofit@gmail.com'],
        reply_to: email,
        subject: subject ? `[CareBetween Contact] ${subject}` : `[CareBetween Contact] Message from ${name}`,
        html,
      }),
    });

    const data = await resp.json();
    if (!resp.ok) {
      console.error('Resend error:', resp.status, data);
      throw new Error(`Resend API failed [${resp.status}]: ${JSON.stringify(data)}`);
    }

    return new Response(JSON.stringify({ success: true, id: data.id }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('send-contact-email error:', errorMessage);
    return new Response(JSON.stringify({ success: false, error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

import { useState } from "react";
import { Mail, MapPin, AlertTriangle } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success("Thank you! Your message has been sent.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div>
      {/* Hero */}
      <section className="py-16 bg-background text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-800 text-foreground mb-4">Contact Us</h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          We're here to listen, support, and answer your questions.
        </p>
      </section>

      {/* Content */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Left: Contact Info */}
            <div className="md:col-span-2 space-y-6">
              <h2 className="font-heading text-2xl font-700 text-foreground">Get in Touch</h2>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:carebetweennonprofit@gmail.com" className="hover:text-primary transition-colors">
                    carebetweennonprofit@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>United States</span>
                </div>
              </div>

              <div className="bg-accent/15 border border-accent/30 rounded-xl p-5 mt-6">
                <h3 className="font-heading font-700 text-foreground flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-accent" />
                  Crisis Support
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  If you are experiencing a medical emergency, please call 911 or go to your nearest emergency room immediately.
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="md:col-span-3">
              <form onSubmit={handleSubmit} className="bg-background rounded-2xl border border-border p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-heading font-600 text-sm text-foreground mb-1.5">Full Name</label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                      maxLength={100}
                    />
                  </div>
                  <div>
                    <label className="block font-heading font-600 text-sm text-foreground mb-1.5">Email Address</label>
                    <input
                      type="email"
                      placeholder="jane@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                      maxLength={255}
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-heading font-600 text-sm text-foreground mb-1.5">Subject</label>
                  <input
                    type="text"
                    placeholder="How can we help?"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                    maxLength={200}
                  />
                </div>
                <div>
                  <label className="block font-heading font-600 text-sm text-foreground mb-1.5">Message</label>
                  <textarea
                    placeholder="Your message here..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 resize-y"
                    maxLength={1000}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-heading font-700 hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

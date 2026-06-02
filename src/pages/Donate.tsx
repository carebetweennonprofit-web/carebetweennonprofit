import { Gift, BookOpen, Users, Heart } from "lucide-react";

const donationImpact = [
  { amount: "$10", impact: "Provides a comfort toy for a child in the hospital", icon: Gift },
  { amount: "$25", impact: "Funds a complete care package for one family", icon: Heart },
  { amount: "$50", impact: "Supports educational materials for 5 families", icon: BookOpen },
  { amount: "$100", impact: "Sponsors a family support group session", icon: Users },
];

const Donate = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-sky-light to-card py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6 animate-float">
            <Heart className="w-10 h-10 text-accent" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-800 text-foreground mb-6">
            Make a <span className="text-primary">Difference</span> Today
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Your generosity helps us deliver care packages, provide resources, and support families navigating the uncertainty of diagnostic limbo.
          </p>
        </div>
      </section>

      {/* Donation form */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 max-w-2xl">
          <div style={{ position: "relative", overflow: "hidden", height: "900px", width: "100%" }}>
            <iframe
              title="Donation form powered by Zeffy"
              style={{ position: "absolute", border: 0, top: 0, left: 0, bottom: 0, right: 0, width: "100%", height: "100%" }}
              src="https://www.zeffy.com/embed/donation-form/donate-to-change-lives-12811"
              allowTransparency={true}
            />
          </div>
        </div>
      </section>

      {/* Impact breakdown */}
      <section className="py-20 bg-sky-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-secondary font-heading font-700 text-sm uppercase tracking-widest mb-3">Your Impact</p>
            <h2 className="font-heading text-3xl md:text-4xl font-800 text-foreground">Where Your Donation Goes</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {donationImpact.map((d) => (
              <div key={d.amount} className="bg-card rounded-2xl p-6 border border-border text-center shadow-sm">
                <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-4">
                  <d.icon className="w-6 h-6 text-accent" />
                </div>
                <p className="font-heading text-2xl font-800 text-foreground mb-2">{d.amount}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{d.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Donate;

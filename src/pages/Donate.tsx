import { useState } from "react";
import { Heart, Gift, BookOpen, Users, Check } from "lucide-react";

const amounts = [10, 25, 50, 100, 250];

const donationImpact = [
  { amount: "$10", impact: "Provides a comfort toy for a child in the hospital", icon: Gift },
  { amount: "$25", impact: "Funds a complete care package for one family", icon: Heart },
  { amount: "$50", impact: "Supports educational materials for 5 families", icon: BookOpen },
  { amount: "$100", impact: "Sponsors a family support group session", icon: Users },
];

const Donate = () => {
  const [selected, setSelected] = useState<number | null>(25);
  const [custom, setCustom] = useState("");

  const activeAmount = custom ? Number(custom) : selected;

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
          <div className="bg-background rounded-3xl p-8 md:p-12 border border-border shadow-lg">
            <h2 className="font-heading text-2xl font-800 text-foreground mb-2 text-center">Choose Your Donation</h2>
            <p className="text-muted-foreground text-center mb-8">Every dollar counts toward bringing comfort and hope.</p>

            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-6">
              {amounts.map((amt) => (
                <button
                  key={amt}
                  onClick={() => { setSelected(amt); setCustom(""); }}
                  className={`py-3 rounded-xl font-heading font-700 text-lg transition-all ${
                    selected === amt && !custom
                      ? "bg-primary text-primary-foreground shadow-md scale-105"
                      : "bg-muted text-foreground hover:bg-primary/15"
                  }`}
                >
                  ${amt}
                </button>
              ))}
            </div>

            <div className="mb-8">
              <label className="block text-sm font-heading font-600 text-muted-foreground mb-2">Custom Amount</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-heading font-700">$</span>
                <input
                  type="number"
                  placeholder="Enter amount"
                  value={custom}
                  onChange={(e) => { setCustom(e.target.value); setSelected(null); }}
                  className="w-full pl-8 pr-4 py-3 rounded-xl border border-border bg-card text-foreground font-heading focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                />
              </div>
            </div>

            <button
              className="w-full flex items-center justify-center gap-2 bg-accent text-accent-foreground py-4 rounded-full font-heading font-700 text-lg shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] disabled:opacity-50"
              disabled={!activeAmount || activeAmount <= 0}
            >
              <Heart className="w-5 h-5" />
              Donate {activeAmount ? `$${activeAmount}` : ""}
            </button>

            <p className="text-muted-foreground text-sm text-center mt-4">
              Secure donation processing. CareBetween is a registered 501(c)(3) nonprofit.
            </p>
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

      {/* Other ways */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-800 text-foreground mb-6">Other Ways to Help</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: "Volunteer", desc: "Join our team of dedicated volunteers who pack care packages and support families." },
              { title: "Spread the Word", desc: "Share our mission on social media and help raise awareness." },
              { title: "Partner With Us", desc: "Organizations and businesses can partner with CareBetween for greater impact." },
            ].map((w) => (
              <div key={w.title} className="bg-background rounded-2xl p-6 border border-border">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-3">
                  <Check className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="font-heading text-lg font-700 text-foreground mb-2">{w.title}</h3>
                <p className="text-muted-foreground text-sm">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;

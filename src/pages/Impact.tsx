import { Package, Users, Heart, Globe } from "lucide-react";
import impactImage from "@/assets/impact-image.jpg";

const stats = [
  { icon: Package, value: "500+", label: "Care Packages Delivered" },
  { icon: Users, value: "1,200+", label: "Families Supported" },
  { icon: Heart, value: "300+", label: "Volunteers Engaged" },
  { icon: Globe, value: "25+", label: "Communities Reached" },
];

const stories = [
  {
    quote: "CareBetween's care package arrived at the hospital on our hardest day. It reminded us that someone out there cared — and that meant everything.",
    author: "Parent of a child in diagnostic limbo",
  },
  {
    quote: "The resources and community CareBetween provided helped us understand what we were going through. We finally didn't feel alone.",
    author: "Family advocate & volunteer",
  },
  {
    quote: "As a volunteer, packing those boxes filled with love and hope is one of the most meaningful things I've ever done.",
    author: "CareBetween volunteer",
  },
];

const Impact = () => (
  <div>
    {/* Hero */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={impactImage} alt="Volunteers packing care packages" className="w-full h-full object-cover" loading="lazy" width={1200} height={800} />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 to-foreground/50" />
      </div>
      <div className="relative container mx-auto px-4 py-28">
        <div className="max-w-2xl">
          <p className="text-accent font-heading font-700 text-sm uppercase tracking-widest mb-3">Making a Difference</p>
          <h1 className="font-heading text-4xl md:text-5xl font-800 text-card mb-6">
            Our <span className="text-primary">Impact</span>
          </h1>
          <p className="text-card/80 text-lg leading-relaxed">
            Every care package, every resource shared, every family connected — it all adds up to create a community of hope and support.
          </p>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="bg-sky-light rounded-2xl p-8 text-center border border-border">
              <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center mx-auto mb-4">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="font-heading text-4xl font-800 text-foreground mb-1">{s.value}</p>
              <p className="text-muted-foreground font-heading font-600">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Stories */}
    <section className="py-20 bg-sky-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-secondary font-heading font-700 text-sm uppercase tracking-widest mb-3">Voices of Hope</p>
          <h2 className="font-heading text-3xl md:text-4xl font-800 text-foreground">Stories From Our Community</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stories.map((s, i) => (
            <div key={i} className="bg-card rounded-2xl p-8 border border-border shadow-sm">
              <div className="text-accent text-4xl font-heading mb-4">"</div>
              <p className="text-foreground leading-relaxed mb-6 italic">{s.quote}</p>
              <p className="text-muted-foreground font-heading font-600 text-sm">— {s.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Programs */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-14">
          <p className="text-accent font-heading font-700 text-sm uppercase tracking-widest mb-3">How We Help</p>
          <h2 className="font-heading text-3xl md:text-4xl font-800 text-foreground">Our Programs</h2>
        </div>
        <div className="space-y-6">
          {[
            {
              title: "Care Package Program",
              desc: "We deliver curated packages filled with toys, comfort items, educational materials, and resources directly to families navigating diagnostic uncertainty.",
            },
            {
              title: "Family Resource Hub",
              desc: "An accessible collection of guides, articles, and connections to specialists helping families understand their options and rights.",
            },
            {
              title: "Community Support Groups",
              desc: "Safe spaces — both online and in-person — where families can share experiences, find understanding, and build lasting connections.",
            },
            {
              title: "Awareness Campaigns",
              desc: "Public advocacy initiatives to educate communities, healthcare providers, and policymakers about the challenges of diagnostic limbo.",
            },
          ].map((prog) => (
            <div key={prog.title} className="bg-background rounded-2xl p-8 border border-border hover:shadow-md transition-all">
              <h3 className="font-heading text-xl font-700 text-foreground mb-2">{prog.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{prog.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Impact;

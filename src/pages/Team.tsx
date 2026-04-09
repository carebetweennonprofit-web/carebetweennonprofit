import { Heart, Sparkles, Shield, Star } from "lucide-react";
import teamBg from "@/assets/team-bg.jpg";
import spencerImg from "@/assets/spencer.png";

const founders = [
  {
    name: "Yisin Lim",
    role: "Co-Founder & Executive Director",
    bio: "Inspired by personal experience with diagnostic limbo, Yisin founded CareBetween to ensure no family feels alone during uncertain medical journeys.",
    icon: Heart,
  },
  {
    name: "Forrest Lin",
    role: "Co-Founder & Director of Outreach",
    bio: "Passionate about community building and advocacy, Forrest leads CareBetween's outreach efforts to connect families with vital resources.",
    icon: Sparkles,
  },
];

const coreMembers = [
  { name: "Logan Kheylik", role: "Communications Lead", icon: Sparkles },
  { name: "Spencer Liu", role: "Financial Officer", icon: Star, image: spencerImg },
];

const Team = () => (
  <div>
    {/* Hero */}
    <section
      className="py-20 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${teamBg})` }}
    >
      <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
        <p className="text-secondary font-heading font-700 text-sm uppercase tracking-widest mb-3">The People Behind CareBetween</p>
        <h1 className="font-heading text-4xl md:text-5xl font-800 text-foreground mb-6">
          Meet Our <span className="text-primary">Team</span>
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          A group of compassionate individuals dedicated to supporting families through diagnostic limbo with empathy, resources, and tireless advocacy.
        </p>
      </div>
    </section>

    {/* Founders */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-accent font-heading font-700 text-sm uppercase tracking-widest mb-3">Leadership</p>
          <h2 className="font-heading text-3xl md:text-4xl font-800 text-foreground">Our Founders</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((f) => (
            <div key={f.role} className="bg-background rounded-2xl p-8 border border-border shadow-sm hover:shadow-lg transition-all">
              <div className="w-20 h-20 rounded-full bg-primary/15 flex items-center justify-center mb-6 mx-auto">
                <f.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-700 text-foreground text-center mb-1">{f.name}</h3>
              <p className="text-secondary font-heading font-600 text-center mb-4">{f.role}</p>
              <p className="text-muted-foreground leading-relaxed text-center">{f.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Core Members */}
    <section className="py-20 bg-sky-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-secondary font-heading font-700 text-sm uppercase tracking-widest mb-3">The Heart of Our Work</p>
          <h2 className="font-heading text-3xl md:text-4xl font-800 text-foreground">Core Members</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {coreMembers.map((m) => (
            <div key={m.role} className="bg-card rounded-2xl p-6 text-center border border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4 mx-auto overflow-hidden">
                {"image" in m && m.image ? (
                  <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
                ) : (
                  <m.icon className="w-8 h-8 text-accent" />
                )}
              </div>
              <h3 className="font-heading text-lg font-700 text-foreground mb-1">{m.name}</h3>
              <p className="text-muted-foreground text-sm">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Join CTA */}
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <h2 className="font-heading text-3xl font-800 text-foreground mb-4">Want to Join Our Team?</h2>
        <p className="text-muted-foreground text-lg mb-6">
          We're always looking for passionate volunteers and advocates. Reach out to learn how you can help.
        </p>
        <a
          href="mailto:carebetweennonprofit@gmail.com"
          className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-3 rounded-full font-heading font-700 hover:opacity-90 transition-all"
        >
          Get in Touch
        </a>
      </div>
    </section>
  </div>
);

export default Team;

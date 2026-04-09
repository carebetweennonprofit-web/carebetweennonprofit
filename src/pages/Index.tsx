import { Link } from "react-router-dom";
import { Heart, Users, BookOpen, Megaphone, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const pillars = [
  {
    icon: Heart,
    title: "Emotional Support",
    desc: "Comfort and joy through toys, care packages, and meaningful resources for children and families.",
  },
  {
    icon: BookOpen,
    title: "Educational Resources",
    desc: "Guiding families with knowledge about rare, undiagnosed, and complex medical conditions.",
  },
  {
    icon: Users,
    title: "Community Building",
    desc: "Creating a supportive network where families never feel alone on their medical journey.",
  },
  {
    icon: Megaphone,
    title: "Advocacy & Awareness",
    desc: "Raising public awareness about diagnostic limbo and championing the needs of affected families.",
  },
];

const Index = () => (
  <div>
    {/* Hero */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Families receiving care packages" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
      </div>
      <div className="relative container mx-auto px-4 py-28 md:py-40">
        <div className="max-w-2xl">
          <p className="inline-block bg-accent/90 text-accent-foreground font-heading font-700 text-sm px-4 py-1.5 rounded-full mb-6">
            Supporting Families in Diagnostic Limbo
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-800 text-card leading-tight mb-6">
            Bridging the Gap with{" "}
            <span className="text-primary">Care</span> &{" "}
            <span className="text-accent">Compassion</span>
          </h1>
          <p className="text-card/80 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
            CareBetween supports children and families navigating undiagnosed and complex medical conditions — bringing comfort, resources, and community when they need it most.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/donate"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full font-heading font-700 shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Heart className="w-5 h-5" />
              Support Our Mission
            </Link>
            <Link
              to="/impact"
              className="inline-flex items-center gap-2 bg-card/15 text-card border border-card/30 px-8 py-4 rounded-full font-heading font-700 hover:bg-card/25 transition-all"
            >
              See Our Impact
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Mission */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <p className="text-secondary font-heading font-700 text-sm uppercase tracking-widest mb-3">Our Mission</p>
        <h2 className="font-heading text-3xl md:text-4xl font-800 text-foreground mb-6">
          No Family Should Navigate the Unknown Alone
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          CareBetween is dedicated to supporting individuals experiencing diagnostic limbo — particularly children and their families — by providing emotional support, educational resources, advocacy, and public awareness about rare, undiagnosed, and complex medical conditions. Our focus is to create a supportive and knowledgeable community, aiding individuals and families through their medical journey.
        </p>
      </div>
    </section>

    {/* What Is Diagnostic Limbo */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <p className="text-secondary font-heading font-700 text-sm uppercase tracking-widest mb-3">Understanding the Challenge</p>
          <h2 className="font-heading text-3xl md:text-4xl font-800 text-foreground">What Is Diagnostic Limbo?</h2>
        </div>
        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
          <p>
            Diagnostic limbo is the uncertain and often overwhelming period when a child or individual is experiencing medical symptoms, but doctors have not yet been able to reach a clear diagnosis. Families may go through countless appointments, tests, and referrals — sometimes over months or even years — without answers.
          </p>
          <p>
            During this time, families face unique emotional, financial, and logistical challenges. Without a diagnosis, it can be difficult to access specialized treatments, connect with support communities, or even explain what's happening to friends and family.
          </p>
          <p>
            Diagnostic limbo is more common than many people realize. Millions of individuals worldwide live with rare, undiagnosed, or complex medical conditions. For children and their caregivers, the uncertainty can feel isolating — but it doesn't have to be.
          </p>
          <p className="text-foreground font-heading font-700 text-center text-xl">
            CareBetween exists to bridge that gap — offering care, connection, and hope while families wait for answers.
          </p>
        </div>
      </div>
    </section>

    {/* Pillars */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-secondary font-heading font-700 text-sm uppercase tracking-widest mb-3">What We Do</p>
          <h2 className="font-heading text-3xl md:text-4xl font-800 text-foreground">Our Four Pillars</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center mb-5">
                <p.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-700 text-foreground mb-3">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-gradient-to-br from-primary/20 via-card to-accent/20">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <h2 className="font-heading text-3xl md:text-4xl font-800 text-foreground mb-6">
          Together, We Can Make a Difference
        </h2>
        <p className="text-muted-foreground text-lg mb-8">
          Every donation helps us deliver care packages, fund research awareness, and support families who are waiting for answers.
        </p>
        <Link
          to="/donate"
          className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-10 py-4 rounded-full font-heading font-700 text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
        >
          <Heart className="w-5 h-5" />
          Donate Today
        </Link>
      </div>
    </section>
  </div>
);

export default Index;

import { Heart, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-heading text-2xl font-800 mb-4">
            Care<span className="text-primary">Between</span>
          </h3>
          <p className="text-background/70 leading-relaxed">
            Supporting families through diagnostic limbo with compassion, resources, and community.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-lg font-700 mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {[
              { to: "/", label: "Home" },
              { to: "/team", label: "Our Team" },
              { to: "/impact", label: "Our Impact" },
              { to: "/donate", label: "Donate" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-background/70 hover:text-primary transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-heading text-lg font-700 mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-background/70">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <span>contact@carebetween.org</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>United States</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-background/10 mt-12 pt-8 text-center text-background/50 text-sm">
        <p className="flex items-center justify-center gap-1">
          © 2025 CareBetween. Made with <Heart className="w-4 h-4 text-accent fill-accent" /> for families everywhere.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

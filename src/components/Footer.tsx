import { Heart, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

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
              { to: "/resources", label: "Resources" },
              { to: "/contact", label: "Contact" },
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
              <a href="mailto:carebetweennonprofit@gmail.com" className="hover:text-primary transition-colors">
                carebetweennonprofit@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>United States</span>
            </div>
          </div>
          <h4 className="font-heading text-lg font-700 mb-4 mt-6">Follow Us</h4>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com/carebetween" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.tiktok.com/@carebetween8" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-primary transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.66a8.2 8.2 0 0 0 4.76 1.52v-3.5a4.85 4.85 0 0 1-1-.09z"/>
              </svg>
            </a>
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

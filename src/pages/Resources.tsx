import { BookOpen, FileText, Link2, Download, ExternalLink } from "lucide-react";

const categories = [
  {
    icon: BookOpen,
    title: "Understanding Diagnostic Limbo",
    items: [
      { type: "GUIDE", title: "What to Expect When You're Expecting Answers" },
      { type: "ARTICLE", title: "Explaining the Unknown to Family and Friends" },
      { type: "WORKSHEET", title: "Coping with Diagnostic Anxiety" },
    ],
  },
  {
    icon: FileText,
    title: "Medical Navigation",
    items: [
      { type: "TEMPLATE", title: "How to Organize Your Child's Medical Records" },
      { type: "CHECKLIST", title: "Questions to Ask at Specialist Appointments" },
      { type: "GUIDE", title: "Understanding Second Opinions" },
    ],
  },
];

const externalLinks = [
  { title: "National Organization for Rare Disorders (NORD)", url: "https://rarediseases.org/" },
  { title: "Undiagnosed Diseases Network", url: "https://undiagnosed.hms.harvard.edu/" },
  { title: "Global Genes", url: "https://globalgenes.org/" },
];

const Resources = () => (
  <div>
    {/* Hero */}
    <section className="py-16 bg-background text-center">
      <h1 className="font-heading text-4xl md:text-5xl font-800 text-foreground mb-4">Resource Library</h1>
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
        Knowledge, tools, and guides to help you navigate the medical system and find emotional support.
      </p>
    </section>

    {/* Categories */}
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4 max-w-5xl space-y-16">
        {categories.map((cat) => (
          <div key={cat.title}>
            <div className="flex items-center gap-3 mb-2">
              <cat.icon className="w-6 h-6 text-primary" />
              <h2 className="font-heading text-2xl font-700 text-foreground">{cat.title}</h2>
            </div>
            <div className="border-t border-primary/30 mb-6" />
            <div className="grid sm:grid-cols-3 gap-5">
              {cat.items.map((item) => (
                <div key={item.title} className="bg-background rounded-xl border border-border p-6 flex flex-col">
                  <span className="text-xs font-heading font-700 uppercase tracking-wider text-secondary mb-2">{item.type}</span>
                  <h3 className="font-heading font-700 text-foreground mb-4 flex-1">{item.title}</h3>
                  <button className="flex items-center justify-center gap-2 border border-border rounded-full py-2 text-sm font-heading font-600 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* External Links */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <Link2 className="w-6 h-6 text-primary" />
            <h2 className="font-heading text-2xl font-700 text-foreground">External Links & Organizations</h2>
          </div>
          <div className="border-t border-primary/30 mb-6" />
          <div className="grid sm:grid-cols-3 gap-5">
            {externalLinks.map((link) => (
              <div key={link.title} className="bg-background rounded-xl border border-border p-6 flex flex-col">
                <span className="text-xs font-heading font-700 uppercase tracking-wider text-secondary mb-2">External Link</span>
                <h3 className="font-heading font-700 text-foreground mb-4 flex-1">{link.title}</h3>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-border rounded-full py-2 text-sm font-heading font-600 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Visit Site
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Resources;

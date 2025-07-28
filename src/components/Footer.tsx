const Footer = () => {
  const footerSections = [
    {
      title: "About Us",
      links: ["Team", "History", "Careers", "Mission", "Vision"]
    },
    {
      title: "Pricing",
      links: ["Personal", "Business", "Enterprise", "Developer", "Non-profit"]
    },
    {
      title: "Media",
      links: ["News", "Blog", "Press Kit", "Brand Assets", "Resources"]
    },
    {
      title: "Contact",
      links: ["Support", "Sales", "Partnership", "(629) 555 0129", "bankai@email.com"]
    }
  ];

  return (
    <footer className="bg-background border-t border-border py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-background"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1 animate-fade-in">
            <div className="flex items-center space-x-2 mb-4 group cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <span className="text-accent-foreground text-sm font-bold">B</span>
              </div>
              <span className="text-xl font-funky text-foreground group-hover:text-accent transition-colors duration-300">Bankai</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs">
              The modern banking solution that helps you manage your money with confidence and security.
            </p>
          </div>
          
          {footerSections.map((section, index) => (
            <div key={index} className="animate-slide-up" style={{animationDelay: `${index * 100}ms`}}>
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-accent transition-all duration-300 text-sm relative group transform hover:scale-105"
                    >
                      {link}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 animate-fade-in">
          <p className="text-muted-foreground text-sm">
            © 2024 Bankai. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-accent transition-all duration-300 text-sm relative group">
              Privacy Policy
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-all duration-300 text-sm relative group">
              Terms of Service
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-all duration-300 text-sm relative group">
              Cookie Policy
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
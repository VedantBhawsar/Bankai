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
    <footer className="bg-background border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground text-sm font-bold">B</span>
              </div>
              <span className="text-xl font-bold text-foreground">Bankai</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs">
              The modern banking solution that helps you manage your money with confidence and security.
            </p>
          </div>
          
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-accent transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © 2024 Bankai. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
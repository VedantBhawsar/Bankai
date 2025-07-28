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
    <footer className="bg-gradient-to-br from-background via-secondary/30 to-background py-20 relative overflow-hidden">
      {/* Floating Background Bubbles */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-accent/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-accent/10 rounded-full blur-lg animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-accent/3 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-10 right-1/3 w-20 h-20 bg-accent/8 rounded-full blur-md animate-bounce" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {/* Brand Section with Enhanced Bubble Design */}
          <div className="col-span-2 md:col-span-1 animate-fade-in">
            <div className="bg-background/50 backdrop-blur-sm rounded-3xl p-6 border border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
              <div className="flex items-center space-x-3 mb-4 group cursor-pointer">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent via-accent/90 to-accent/70 rounded-full flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg shadow-accent/30">
                    <span className="text-accent-foreground text-sm font-bold">B</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent/60 rounded-full animate-pulse"></div>
                </div>
                <span className="text-xl font-funky text-foreground group-hover:text-accent transition-colors duration-300">Bankai</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The modern banking solution that helps you manage your money with confidence and security.
              </p>
            </div>
          </div>

          {/* Footer Sections with Bubble Cards */}
          {footerSections.map((section, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="bg-background/30 backdrop-blur-sm rounded-2xl p-5 border border-border/30 hover:border-accent/20 transition-all duration-300 hover:shadow-md hover:shadow-accent/5 h-full">
                <h3 className="font-semibold text-foreground mb-4 flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-accent transition-all duration-300 text-sm relative group flex items-center hover:translate-x-1"
                      >
                        <span className="w-1 h-1 bg-muted-foreground/50 rounded-full mr-2 group-hover:bg-accent transition-colors duration-300"></span>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section with Bubble Design */}
        <div className="relative">
          <div className="bg-background/40 backdrop-blur-sm rounded-full border border-border/50 px-8 py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 animate-fade-in hover:border-accent/30 transition-all duration-300">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                <span className="text-accent text-xs">©</span>
              </div>
              <p className="text-muted-foreground text-sm">
                2024 Bankai. All rights reserved.
              </p>
            </div>

            <div className="flex items-center space-x-1 bg-secondary/50 rounded-full p-1">
              <a href="#" className="px-4 py-2 rounded-full text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300 text-sm hover:scale-105">
                Privacy Policy
              </a>
              <a href="#" className="px-4 py-2 rounded-full text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300 text-sm hover:scale-105">
                Terms of Service
              </a>
              <a href="#" className="px-4 py-2 rounded-full text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300 text-sm hover:scale-105">
                Cookie Policy
              </a>
            </div>
          </div>

          {/* Small Decorative Bubbles */}
          <div className="absolute -top-2 left-20 w-3 h-3 bg-accent/30 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="absolute -bottom-2 right-32 w-2 h-2 bg-accent/40 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-20 w-1.5 h-1.5 bg-accent/50 rounded-full animate-pulse"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
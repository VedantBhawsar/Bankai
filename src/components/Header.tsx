import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2 group cursor-pointer">
          <div className="w-8 h-8 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
            <span className="text-accent-foreground text-sm font-bold">B</span>
          </div>
          <span className="text-xl font-funky text-foreground group-hover:text-accent transition-colors duration-300">Bankai</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-foreground hover:text-accent transition-all duration-300 relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#" className="text-foreground hover:text-accent transition-all duration-300 relative group">
            About Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#" className="text-foreground hover:text-accent transition-all duration-300 relative group">
            Why Bankai
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
          </a>
          <Button variant="funky" size="sm">
            Contact Us
          </Button>
        </nav>
        
        <Button className="md:hidden" variant="outline" size="sm">
          Menu
        </Button>
      </div>
    </header>
  );
};

export default Header;
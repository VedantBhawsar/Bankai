import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground text-sm font-bold">B</span>
          </div>
          <span className="text-xl font-bold text-foreground">Bankai</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-foreground hover:text-accent transition-colors">Home</a>
          <a href="#" className="text-foreground hover:text-accent transition-colors">About Us</a>
          <a href="#" className="text-foreground hover:text-accent transition-colors">Why Bankai</a>
          <Button variant="default" size="sm">
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
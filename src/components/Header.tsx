import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4">
      <div className="bg-background/90 backdrop-blur-xl border border-border/50 rounded-full shadow-2xl shadow-accent/10 px-6 py-3 flex items-center justify-between transition-all duration-300 hover:shadow-accent/20">
        {/* Logo Bubble */}
        <div className="flex items-center space-x-3 group cursor-pointer">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-accent via-accent/90 to-accent/70 rounded-full flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg shadow-accent/30">
              <span className="text-accent-foreground text-sm font-bold">B</span>
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent/60 rounded-full animate-pulse"></div>
          </div>
          <span className="text-xl font-funky text-foreground group-hover:text-accent transition-colors duration-300">Bankai</span>
        </div>

        {/* Navigation Bubbles */}
        <nav className="hidden md:flex items-center space-x-2">
          <div className="flex items-center space-x-1 bg-secondary/50 rounded-full p-1">
            <a href="#" className="px-4 py-2 rounded-full text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Home
            </a>
            <a href="#" className="px-4 py-2 rounded-full text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg">
              About Us
            </a>
            <a href="#" className="px-4 py-2 rounded-full text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Why Bankai
            </a>
          </div>

          {/* CTA Bubble */}
          <div className="relative ml-4">
            <Button
              variant="funky"
              size="sm"
              className="rounded-full px-6 py-2 shadow-lg shadow-accent/30 hover:shadow-accent/50 transform hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </Button>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full animate-bounce"></div>
          </div>
        </nav>

        {/* Mobile Menu Bubble */}
        <div className="md:hidden relative">
          <Button
            variant="outline"
            size="sm"
            className="rounded-full w-10 h-10 p-0 border-2 hover:border-accent hover:bg-accent/10 transition-all duration-300 hover:scale-110"
          >
            <div className="flex flex-col space-y-1">
              <div className="w-3 h-0.5 bg-current rounded-full"></div>
              <div className="w-3 h-0.5 bg-current rounded-full"></div>
              <div className="w-3 h-0.5 bg-current rounded-full"></div>
            </div>
          </Button>
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent/60 rounded-full animate-ping"></div>
        </div>
      </div>

      {/* Floating Decorative Bubbles */}
      <div className="absolute -top-2 left-20 w-4 h-4 bg-accent/20 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
      <div className="absolute -bottom-2 right-32 w-3 h-3 bg-accent/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-20 w-2 h-2 bg-accent/40 rounded-full animate-pulse"></div>
    </header>
  );
};

export default Header;
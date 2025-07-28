import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import heroPhone from "@/assets/hero-phone.png";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-background to-secondary py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-funky text-foreground leading-tight">
                The Next Big Thing
                <br />
                In Digital Money
                <br />
                <span className="text-accent animate-glow">Transfer</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md animate-slide-up">
                With our powerful financial management and instant transaction experience for 
                business. We help you eliminate the outdated slow and keep
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-scale-in">
              <Button variant="accent" size="lg" className="group overflow-hidden relative">
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  App Store
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/40 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Button>
              <Button variant="outline" size="lg" className="group overflow-hidden relative">
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  Google Play
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-accent/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Button>
            </div>
            
            <div className="flex items-center space-x-4 animate-fade-in">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-warning text-warning animate-scale-in" style={{animationDelay: `${i * 100}ms`}} />
                ))}
              </div>
              <span className="text-2xl font-funky text-foreground">4.8</span>
            </div>
          </div>
          
          <div className="relative flex justify-center">
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-accent/10 rounded-full blur-3xl scale-150 animate-glow"></div>
              <img 
                src={heroPhone} 
                alt="Banking App Interface" 
                className="relative z-10 max-w-sm w-full h-auto transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-1/4 -left-4 w-8 h-8 bg-accent/20 rounded-full animate-ping"></div>
              <div className="absolute bottom-1/3 -right-6 w-6 h-6 bg-accent/30 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
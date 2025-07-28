import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import heroPhone from "@/assets/hero-phone.png";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-background to-secondary py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                The Next Big Thing
                <br />
                In Digital Money
                <br />
                <span className="text-accent">Transfer</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                With our powerful financial management and instant transaction experience for 
                business. We help you eliminate the outdated slow and keep
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="lg" className="bg-accent hover:bg-accent/90">
                <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-8" />
              </Button>
              <Button variant="outline" size="lg">
                <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Google Play" className="h-8" />
              </Button>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-warning text-warning" />
                ))}
              </div>
              <span className="text-2xl font-bold text-foreground">4.8</span>
            </div>
          </div>
          
          <div className="relative flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/10 rounded-full blur-3xl scale-150"></div>
              <img 
                src={heroPhone} 
                alt="Banking App Interface" 
                className="relative z-10 max-w-sm w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
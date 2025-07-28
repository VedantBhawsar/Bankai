import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const HeroSection = () => {
  // Professional women avatars from Unsplash - optimized for SEO
  const userAvatars = [
    {
      src: "https://images.unsplash.com/photo-1610387694365-19fafcc86d86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODQyNjN8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHdvbWVuJTIwcG9ydHJhaXR8ZW58MHwxfHx8MTc1MzcyMTU0MHww&ixlib=rb-4.1.0&q=80&w=200",
      alt: "Professional businesswoman using Bankai digital banking app"
    },
    {
      src: "https://images.unsplash.com/photo-1610631066894-62452ccb927c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODQyNjN8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHdvbWVuJTIwcG9ydHJhaXR8ZW58MHwxfHx8MTc1MzcyMTU0MHww&ixlib=rb-4.1.0&q=80&w=200",
      alt: "Business professional satisfied with Bankai money transfer services"
    },
    {
      src: "https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODQyNjN8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHdvbWVuJTIwcG9ydHJhaXR8ZW58MHwxfHx8MTc1MzcyMTU0MHww&ixlib=rb-4.1.0&q=80&w=200",
      alt: "Financial professional recommending Bankai banking solutions"
    },
    {
      src: "https://images.unsplash.com/photo-1739300293504-234817eead52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODQyNjN8MHwxfHNlYXJjaHw0fHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHdvbWVuJTIwcG9ydHJhaXR8ZW58MHwxfHx8MTc1MzcyMTU0MHww&ixlib=rb-4.1.0&q=80&w=200",
      alt: "Entrepreneur using Bankai for business financial management"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-background to-secondary py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-funky text-foreground leading-tight">
                The Next Big Thing
                <br />
                In Digital Money
                <br />
                <span className="text-accent animate-glow">Transfer</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up">
                Experience powerful financial management and instant transaction capabilities for your business. We help you eliminate outdated, slow banking processes and embrace the future of digital finance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button variant="accent" size="lg" className="group overflow-hidden relative">
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  App Store
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/40 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Button>
              <Button variant="outline" size="lg" className="group overflow-hidden relative">
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  Google Play
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-accent/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Button>
            </div>

            {/* User Avatars Section - Inspired by the image */}
            <div className="flex flex-col items-center space-y-4 animate-fade-in">
              <div className="flex items-center justify-center">
                <div className="flex -space-x-3">
                  {userAvatars.map((avatar, index) => (
                    <img
                      key={index}
                      src={avatar.src}
                      alt={avatar.alt}
                      className="w-8 h-8 hover:z-50 rounded-full border-3 border-background object-cover hover:scale-110 transition-transform duration-200"
                      style={{ zIndex: userAvatars.length - index }}
                      loading="lazy"
                      width="30"
                      height="30"
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center space-x-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-warning text-warning animate-scale-in" style={{ animationDelay: `${i * 100}ms` }} />
                  ))}
                </div>
                <span className="text-2xl font-funky text-foreground">4.8</span>
                <span className="text-sm text-muted-foreground">Trusted by 10k+ builders</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
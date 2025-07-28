import { Button } from "@/components/ui/button";
import downloadPhones from "@/assets/download-phones.png";

const DownloadSection = () => {
  return (
    <section className="bg-section-dark text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src={downloadPhones} 
              alt="Download Banking App" 
              className="max-w-full h-auto"
            />
          </div>
          
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold">
                Download Our
                <br />
                <span className="text-accent">App Now</span>
              </h2>
              <p className="text-lg text-white/80 max-w-md">
                Practical don't feel free to download our application on your phone store, all 
                people play store to evaluate our product.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="secondary" 
                size="lg" 
                className="bg-white text-section-dark hover:bg-white/90"
              >
                <img 
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                  alt="Download on App Store" 
                  className="h-8 brightness-0"
                />
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-section-dark hover:bg-white/90"
              >
                <img 
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                  alt="Get it on Google Play" 
                  className="h-8"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
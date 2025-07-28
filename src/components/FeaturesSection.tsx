import { Card, CardContent } from "@/components/ui/card";
import featuresPhones from "@/assets/features-phones.png";

const FeaturesSection = () => {
  const features = [
    {
      title: "Instant, Fee - Free Payment",
      description: "We instantly send money to your recipient account without any fees"
    },
    {
      title: "Keep Your Cash Flow Clear And Keep Increasing",
      description: "Getting regular that your business payment account into functional"
    },
    {
      title: "No Unwanted Subscriptions",
      description: "Getting proper money your business payment account into your payment"
    }
  ];

  return (
    <section className="bg-section-dark text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Safe & Convenient
            <br />
            <span className="text-accent">Transaction</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-white/80">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="relative flex justify-center">
            <img 
              src={featuresPhones} 
              alt="Banking App Features" 
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
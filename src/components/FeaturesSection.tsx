import { Card, CardContent } from "@/components/ui/card";

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
    <section className="bg-section-dark text-white py-20 relative overflow-hidden" aria-labelledby="features-heading">
      <div className="absolute inset-0 bg-gradient-to-br from-section-dark via-section-dark to-accent/5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-funky mb-6">
            Safe & Convenient
            <br />
            <span className="text-accent animate-glow">Transaction</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Experience secure, instant financial transactions with our advanced banking technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 transform  hover:shadow-xl group animate-slide-up" style={{ animationDelay: `${index * 200}ms` }}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-white/80 group-hover:text-white/90 transition-colors duration-300">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="relative flex justify-center">
            <div className="animate-float">
              <img
                src="https://images.unsplash.com/photo-1570894808314-677b57f25e45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODQyNjN8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBiYW5raW5nJTIwYXBwJTIwaW50ZXJmYWNlfGVufDB8MXx8fDE3NTM3MjA4ODV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Bankai mobile banking app interface showing secure transaction features and user-friendly design"
                className="max-w-sm w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width="400"
                height="600"
              />
              <div className="absolute top-1/4 -left-4 w-12 h-12 bg-accent/20 rounded-full animate-ping"></div>
              <div className="absolute bottom-1/3 -right-6 w-8 h-8 bg-accent/30 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
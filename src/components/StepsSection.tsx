import { Card, CardContent } from "@/components/ui/card";
import { Download, CreditCard, Send, Award } from "lucide-react";

const StepsSection = () => {
  const steps = [
    {
      icon: Download,
      title: "Download App",
      description: "Download the Bankai app from Google Play Store or App Store to get started with modern digital banking"
    },
    {
      icon: CreditCard,
      title: "Choose Payment",
      description: "Select your preferred payment method from multiple secure options including cards, bank transfers, and digital wallets"
    },
    {
      icon: Send,
      title: "Make Payment",
      description: "Execute instant, fee-free payments and money transfers with our secure and reliable banking platform"
    },
    {
      icon: Award,
      title: "Get Amazing Services",
      description: "Enjoy premium banking services, 24/7 support, and advanced financial management tools"
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden" aria-labelledby="steps-heading">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-accent/5 rounded-3xl blur-3xl group-hover:bg-accent/10 transition-all duration-500"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform  animate-scale-in">
              <div className="space-y-6">
                <div className="text-center animate-fade-in">
                  <div className="text-3xl font-funky text-foreground">$24,320.00</div>
                  <div className="text-sm text-muted-foreground">Available Balance</div>
                </div>

                <div className="grid grid-cols-2 gap-4 animate-slide-up">
                  <div className="bg-primary text-primary-foreground p-4 rounded-2xl hover:bg-primary/90 transition-colors duration-300 transform ">
                    <div className="text-lg font-semibold">$12,986.00</div>
                    <div className="text-sm opacity-80">Checking</div>
                  </div>
                  <div className="bg-accent text-accent-foreground p-4 rounded-2xl hover:bg-accent/90 transition-colors duration-300 transform ">
                    <div className="text-lg font-semibold">$2,364.00</div>
                    <div className="text-sm opacity-80">Savings</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-sm font-medium text-foreground">Recent Activity</div>
                  {[
                    { name: "Netflix", amount: "-$73", icon: "🎬" },
                    { name: "Danielle Davis", amount: "+$300", icon: "👤" },
                    { name: "Apple Music", amount: "-$45", icon: "🎵" }
                  ].map((transaction, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-secondary rounded-xl hover:bg-secondary/80 transition-all duration-300 transform hover:scale-102 animate-fade-in group" style={{ animationDelay: `${index * 100}ms` }}>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-sm group-hover:scale-110 transition-transform duration-300">
                          {transaction.icon}
                        </div>
                        <span className="text-sm font-medium">{transaction.name}</span>
                      </div>
                      <span className={`text-sm font-semibold ${transaction.amount.startsWith('+') ? 'text-success' : 'text-foreground'}`}>
                        {transaction.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="animate-fade-in">
              <h2 id="steps-heading" className="text-4xl font-funky text-foreground mb-4">
                4 Quick Steps To Use Our
                <br />
                <span className="text-accent">Services</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-md">
                Get started with Bankai in minutes. Follow these simple steps to begin your digital banking journey.
              </p>
            </div>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <Card key={index} className="border-none shadow-sm hover:shadow-lg transition-all duration-300 transform  group animate-slide-up" style={{ animationDelay: `${index * 150}ms` }}>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                      <step.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">
                        {step.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
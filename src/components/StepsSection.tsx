import { Card, CardContent } from "@/components/ui/card";
import { Download, CreditCard, Send, Award } from "lucide-react";

const StepsSection = () => {
  const steps = [
    {
      icon: Download,
      title: "Download App",
      description: "The most online our app downloaded and mobile application through Google play store and App store"
    },
    {
      icon: CreditCard,
      title: "Choose Payment",
      description: "The most online our app downloaded and mobile application through Google play store and App store"
    },
    {
      icon: Send,
      title: "Make Payment", 
      description: "The most online our app downloaded and mobile application through Google play store and App store"
    },
    {
      icon: Award,
      title: "Get Amazing Services",
      description: "The most online our app downloaded and mobile application through Google play store and App store"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-accent/5 rounded-full blur-3xl"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground">$24,320.00</div>
                  <div className="text-sm text-muted-foreground">Available Balance</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary text-primary-foreground p-4 rounded-2xl">
                    <div className="text-lg font-semibold">$12,986.00</div>
                    <div className="text-sm opacity-80">Checking</div>
                  </div>
                  <div className="bg-accent text-accent-foreground p-4 rounded-2xl">
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
                    <div key={index} className="flex items-center justify-between p-3 bg-secondary rounded-xl">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-sm">
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
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                4 Quick Steps To Use Our
                <br />
                <span className="text-accent">Services</span>
              </h2>
            </div>
            
            <div className="space-y-6">
              {steps.map((step, index) => (
                <Card key={index} className="border-none shadow-sm">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
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
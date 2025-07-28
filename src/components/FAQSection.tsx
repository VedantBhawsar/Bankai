import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What Is Bankai?",
      answer: "Bankai is a modern digital banking platform that offers secure money transfers, payment solutions, and financial management tools for businesses and individuals."
    },
    {
      question: "How To Active Bankai Services?",
      answer: "Download our app from the App Store or Google Play, create your account using your email address and phone number, verify your identity, and start using our services immediately."
    },
    {
      question: "What Are The Advantages Of Using Bankai?",
      answer: "Enjoy instant fee-free transfers, advanced security features, 24/7 customer support, multi-currency support, and seamless integration with your existing financial ecosystem."
    },
    {
      question: "How To Do Transaction Using Bankai?",
      answer: "Simply open the app, select 'Send Money', enter the recipient's details, choose the amount, review the transaction, and confirm. Funds are transferred instantly."
    },
    {
      question: "Who Is Eligible To Open Bankai Account?",
      answer: "Anyone 18 years or older with a valid government ID, phone number, and email address can open a Bankai account. Business accounts require additional documentation."
    }
  ];

  return (
    <section className="py-20 bg-secondary/30 relative overflow-hidden" aria-labelledby="faq-heading">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-background to-secondary/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 id="faq-heading" className="text-4xl font-funky text-foreground animate-fade-in">
              Have Question About
              <br />
              <span className="text-accent">Bankai?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-md">
              Find answers to common questions about our digital banking services and features.
            </p>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-102 animate-slide-up group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-medium text-foreground hover:no-underline hover:text-accent transition-colors duration-300 group-hover:text-accent">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="relative animate-scale-in">
            <div className="bg-section-dark rounded-3xl p-8 text-white transform  transition-all duration-500 hover:shadow-2xl">
              <div className="space-y-6">
                <div className="text-center animate-fade-in">
                  <div className="text-2xl font-funky">$24,320.00</div>
                  <div className="text-sm opacity-70">Total Balance</div>
                </div>

                <div className="grid grid-cols-2 gap-4 animate-slide-up">
                  <div className="bg-accent p-4 rounded-2xl hover:bg-accent/90 transition-colors duration-300 transform ">
                    <div className="text-lg font-semibold">$12,986.00</div>
                    <div className="text-sm opacity-80">Primary</div>
                  </div>
                  <div className="bg-white/20 p-4 rounded-2xl hover:bg-white/30 transition-colors duration-300 transform ">
                    <div className="text-lg font-semibold">$2,364.00</div>
                    <div className="text-sm opacity-80">Savings</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-sm font-medium">Recent Activity</div>
                  {[
                    { name: "Netflix", amount: "-$73", time: "2h ago" },
                    { name: "Danielle Davis", amount: "+$300", time: "5h ago" },
                    { name: "Apple Music", amount: "-$45", time: "1d ago" }
                  ].map((transaction, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white/10 rounded-xl hover:bg-white/15 transition-all duration-300 transform hover:scale-102 group animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <div className="w-4 h-4 bg-accent rounded-full"></div>
                        </div>
                        <div>
                          <div className="text-sm font-medium">{transaction.name}</div>
                          <div className="text-xs opacity-70">{transaction.time}</div>
                        </div>
                      </div>
                      <span className={`text-sm font-semibold ${transaction.amount.startsWith('+') ? 'text-green-400' : 'text-white'}`}>
                        {transaction.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
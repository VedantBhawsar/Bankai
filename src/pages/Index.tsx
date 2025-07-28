import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import StepsSection from "@/components/StepsSection";
import FAQSection from "@/components/FAQSection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import Analytics from "@/components/Analytics";
import { generateFAQStructuredData } from "@/utils/seo";

// Type declaration for Google Analytics gtag function
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const Index = () => {
  const seoData = {
    title: "Bankai - Modern Digital Banking & Money Transfer App",
    description: "Experience the future of digital banking with Bankai. Instant, fee-free payments, secure transactions, and powerful financial management tools for individuals and businesses.",
    keywords: "digital banking, money transfer, mobile banking, financial app, instant payments, secure transactions, business banking, personal finance",
    image: "https://bankai-app.com/og-image.jpg",
    url: "https://bankai-app.com/",
    type: "website"
  };

  const faqData = [
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
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Bankai - Digital Banking Home",
    "description": seoData.description,
    "url": seoData.url,
    "mainEntity": {
      "@type": "SoftwareApplication",
      "name": "Bankai",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": ["iOS", "Android", "Web"],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "10000"
      }
    },
    "hasPart": [
      generateFAQStructuredData(faqData)
    ]
  };

  useEffect(() => {
    // Add page view tracking for analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: seoData.title,
        page_location: seoData.url
      });
    }
  }, [seoData.title, seoData.url]);

  return (
    <>
      <SEOHead seoData={seoData} structuredData={structuredData} />
      <Analytics />
      <div className="min-h-screen bg-background">
        <Header />
        <main role="main">
          <HeroSection />
          <FeaturesSection />
          <StepsSection />
          <FAQSection />
          <DownloadSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

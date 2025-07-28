import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead';

// Type declaration for Google Analytics gtag function
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const NotFound = () => {
  const seoData = {
    title: '404 - Page Not Found | Bankai Digital Banking',
    description: 'The page you are looking for could not be found. Return to Bankai homepage to explore our digital banking services.',
    keywords: '404, page not found, bankai, digital banking',
    url: 'https://bankai-app.com/404',
    type: 'website'
  };

  useEffect(() => {
    // Track 404 errors for analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: '404 - Page Not Found',
        page_location: window.location.href,
        custom_parameter: '404_error'
      });
    }
  }, []);

  return (
    <>
      <SEOHead seoData={seoData} />
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center space-y-8 max-w-md">
          <div className="space-y-4">
            <h1 className="text-6xl font-funky text-accent">404</h1>
            <h2 className="text-2xl font-semibold text-foreground">Page Not Found</h2>
            <p className="text-muted-foreground">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          <div className="space-y-4">
            <Button asChild size="lg" className="w-full">
              <Link to="/">Return to Homepage</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full">
              <Link to="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
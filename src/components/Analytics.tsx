import { useEffect } from 'react';

// Google Analytics component
const Analytics = () => {
    useEffect(() => {
        // Google Analytics 4 setup
        const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with actual GA4 ID

        // Load Google Analytics script
        const script1 = document.createElement('script');
        script1.async = true;
        script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
        document.head.appendChild(script1);

        // Initialize Google Analytics
        const script2 = document.createElement('script');
        script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', {
        page_title: document.title,
        page_location: window.location.href
      });
    `;
        document.head.appendChild(script2);

        // Google Search Console verification
        const searchConsoleScript = document.createElement('meta');
        searchConsoleScript.name = 'google-site-verification';
        searchConsoleScript.content = 'your-google-search-console-verification-code';
        document.head.appendChild(searchConsoleScript);

        // Cleanup function
        return () => {
            document.head.removeChild(script1);
            document.head.removeChild(script2);
            document.head.removeChild(searchConsoleScript);
        };
    }, []);

    return null;
};

export default Analytics;
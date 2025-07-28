import { useEffect } from 'react';
import { updateMetaTags, SEOData } from '@/utils/seo';

// Type declaration for Google Analytics gtag function
declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
        dataLayer?: unknown[];
    }
}

// Custom hook for SEO management
export const useSEO = (seoData: SEOData, structuredData?: object) => {
    useEffect(() => {
        // Update meta tags
        updateMetaTags(seoData);

        // Add structured data if provided
        if (structuredData) {
            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.textContent = JSON.stringify(structuredData);
            script.setAttribute('data-seo', 'structured-data');

            // Remove existing structured data
            const existingScript = document.querySelector('script[data-seo="structured-data"]');
            if (existingScript) {
                existingScript.remove();
            }

            document.head.appendChild(script);

            return () => {
                const scriptToRemove = document.querySelector('script[data-seo="structured-data"]');
                if (scriptToRemove) {
                    scriptToRemove.remove();
                }
            };
        }
    }, [seoData, structuredData]);
};

// Hook for tracking page views
export const usePageView = (pageName: string) => {
    useEffect(() => {
        // Google Analytics page view
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'page_view', {
                page_title: document.title,
                page_location: window.location.href,
                page_name: pageName
            });
        }

        // Custom analytics events
        if (typeof window !== 'undefined' && window.dataLayer) {
            window.dataLayer.push({
                event: 'page_view',
                page_name: pageName,
                page_title: document.title,
                page_url: window.location.href
            });
        }
    }, [pageName]);
};
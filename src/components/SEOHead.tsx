import { useEffect } from 'react';
import { updateMetaTags, SEOData } from '@/utils/seo';

interface SEOHeadProps {
    seoData: SEOData;
    structuredData?: object;
}

const SEOHead = ({ seoData, structuredData }: SEOHeadProps) => {
    useEffect(() => {
        updateMetaTags(seoData);

        // Add structured data if provided
        if (structuredData) {
            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.textContent = JSON.stringify(structuredData);

            // Remove existing structured data script if any
            const existingScript = document.querySelector('script[data-seo="structured-data"]');
            if (existingScript) {
                existingScript.remove();
            }

            script.setAttribute('data-seo', 'structured-data');
            document.head.appendChild(script);

            // Cleanup on unmount
            return () => {
                const scriptToRemove = document.querySelector('script[data-seo="structured-data"]');
                if (scriptToRemove) {
                    scriptToRemove.remove();
                }
            };
        }
    }, [seoData, structuredData]);

    return null; // This component doesn't render anything
};

export default SEOHead;
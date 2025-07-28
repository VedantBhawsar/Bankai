// SEO utility functions for dynamic meta tag management
export interface SEOData {
    title: string;
    description: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
}

export const updateMetaTags = (seoData: SEOData) => {
    // Update title
    document.title = seoData.title;

    // Update meta description
    updateMetaTag('description', seoData.description);

    // Update keywords if provided
    if (seoData.keywords) {
        updateMetaTag('keywords', seoData.keywords);
    }

    // Update Open Graph tags
    updateMetaProperty('og:title', seoData.title);
    updateMetaProperty('og:description', seoData.description);
    updateMetaProperty('og:type', seoData.type || 'website');

    if (seoData.image) {
        updateMetaProperty('og:image', seoData.image);
    }

    if (seoData.url) {
        updateMetaProperty('og:url', seoData.url);
        updateCanonicalUrl(seoData.url);
    }

    // Update Twitter Card tags
    updateMetaProperty('twitter:title', seoData.title);
    updateMetaProperty('twitter:description', seoData.description);

    if (seoData.image) {
        updateMetaProperty('twitter:image', seoData.image);
    }
};

const updateMetaTag = (name: string, content: string) => {
    let element = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
    if (!element) {
        element = document.createElement('meta');
        element.name = name;
        document.head.appendChild(element);
    }
    element.content = content;
};

const updateMetaProperty = (property: string, content: string) => {
    let element = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
    if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
    }
    element.content = content;
};

const updateCanonicalUrl = (url: string) => {
    let element = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!element) {
        element = document.createElement('link');
        element.rel = 'canonical';
        document.head.appendChild(element);
    }
    element.href = url;
};

// Structured data helpers
export const generateBreadcrumbStructuredData = (breadcrumbs: Array<{ name: string, url: string }>) => {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": crumb.name,
            "item": crumb.url
        }))
    };
};

export const generateFAQStructuredData = (faqs: Array<{ question: string, answer: string }>) => {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };
};

// Image optimization helper
export const getOptimizedImageUrl = (url: string, width?: number, height?: number) => {
    if (url.includes('unsplash.com')) {
        const params = new URLSearchParams();
        if (width) params.append('w', width.toString());
        if (height) params.append('h', height.toString());
        params.append('fit', 'crop');
        params.append('auto', 'format');
        params.append('q', '80');

        return `${url}&${params.toString()}`;
    }
    return url;
};
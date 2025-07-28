// SEO Configuration for Bankai Digital Banking App
export const seoConfig = {
    defaultTitle: 'Bankai - Modern Digital Banking & Money Transfer App',
    titleTemplate: '%s | Bankai Digital Banking',
    defaultDescription: 'Experience the future of digital banking with Bankai. Instant, fee-free payments, secure transactions, and powerful financial management tools for individuals and businesses.',
    siteUrl: 'https://bankai-app.com',
    defaultImage: 'https://bankai-app.com/og-image.jpg',
    twitterHandle: '@bankai_app',
    facebookAppId: 'your-facebook-app-id',

    // Keywords for different pages
    keywords: {
        home: 'digital banking, money transfer, mobile banking, financial app, instant payments, secure transactions, business banking, personal finance',
        features: 'banking features, secure payments, financial management, money transfer features, digital wallet',
        about: 'about bankai, digital banking company, financial technology, fintech solutions',
        contact: 'contact bankai, customer support, banking help, financial assistance'
    },

    // Structured data templates
    organization: {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Bankai Financial Technologies',
        url: 'https://bankai-app.com',
        logo: 'https://bankai-app.com/logo.png',
        description: 'Modern digital banking and financial technology company providing secure money transfer and payment solutions.',
        foundingDate: '2024',
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-629-555-0129',
            contactType: 'customer service',
            email: 'bankai@email.com',
            availableLanguage: ['English']
        },
        sameAs: [
            'https://twitter.com/bankai_app',
            'https://facebook.com/bankaiapp',
            'https://linkedin.com/company/bankai-financial'
        ]
    },

    // FAQ structured data
    faqStructuredData: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'What Is Bankai?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Bankai is a modern digital banking platform that offers secure money transfers, payment solutions, and financial management tools for businesses and individuals.'
                }
            },
            {
                '@type': 'Question',
                name: 'How To Active Bankai Services?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Download our app from the App Store or Google Play, create your account using your email address and phone number, verify your identity, and start using our services immediately.'
                }
            },
            {
                '@type': 'Question',
                name: 'What Are The Advantages Of Using Bankai?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Enjoy instant fee-free transfers, advanced security features, 24/7 customer support, multi-currency support, and seamless integration with your existing financial ecosystem.'
                }
            }
        ]
    }
};

// Page-specific SEO data
export const pagesSEO = {
    home: {
        title: seoConfig.defaultTitle,
        description: seoConfig.defaultDescription,
        keywords: seoConfig.keywords.home,
        url: seoConfig.siteUrl,
        image: seoConfig.defaultImage
    },
    features: {
        title: 'Banking Features - Secure Digital Payments | Bankai',
        description: 'Discover Bankai\'s advanced banking features including instant transfers, secure payments, financial management tools, and 24/7 customer support.',
        keywords: seoConfig.keywords.features,
        url: `${seoConfig.siteUrl}/features`,
        image: `${seoConfig.siteUrl}/features-og.jpg`
    },
    about: {
        title: 'About Bankai - Digital Banking Innovation | Bankai',
        description: 'Learn about Bankai\'s mission to revolutionize digital banking with secure, instant financial services and cutting-edge technology.',
        keywords: seoConfig.keywords.about,
        url: `${seoConfig.siteUrl}/about`,
        image: `${seoConfig.siteUrl}/about-og.jpg`
    }
};
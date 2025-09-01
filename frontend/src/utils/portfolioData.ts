export type Project = {
  id: string;
  title: string;
  summary: string;
  description: string;  // Markdown long content for detail page
  descriptionHtml?: string; // raw html, sanitized before render
  tech: string[];
  client: string;
  industry: string;
  images: string;
  logo?: string;
};

export const projects: Project[] = [
  {
    id: '1',
    title: 'Storeking – Grocery Shopping App',
    tech: ['React Native', 'Redux', 'Node.js', 'Express', 'Firebase', 'Stripe'],
    client: 'iNiLabs',
    industry: 'E-commerce / Grocery',
    images: '/storeking-mockup.png',
    logo: '/storeking-logo.webp',
    summary:
      'Hassle-free grocery shopping with a clean UX, powerful search, secure payments, offers, and fast doorstep delivery.',
    description: `
## About the Product
Storeking simplifies grocery shopping by delivering daily essentials, fresh produce, and household items to your doorstep with an intuitive, mobile-first experience.

## Key Features
- **Wide product range**: groceries, personal care, and household items
- **Fresh & quality assured** across fruits, vegetables, and staples
- **Powerful search** to find items in a few taps
- **Exclusive discounts & offers** to boost conversions
- **Fast & reliable delivery** with status updates
- **Secure payments** with multiple options

## Version & Release
- **Version:** 1.0.0  
- **Released:** 10 Dec 2024  
- **Last Updated:** 22 Jul 2025  
- **Installs:** 500+  

## Our Role
Architecture, UI/UX, frontend, integrations, performance tuning, and release support.
`
  },
  {
    id: '2',
    title: 'Swastik MCX – Commodity & Forex Live Rates App',
    tech: ['React Native', 'Redux Toolkit', 'Node.js', 'Express', 'Firebase', 'REST APIs'],
    client: 'Webprix Technologies India Pvt Ltd',
    industry: 'Finance / Trading',
    images: '/swastikmcx-mockup.png',
    logo: '/swastikmcx-logo.webp',
    summary:
      'A real-time commodity and forex tracking mobile application that empowers traders with live MCX rates, secure authentication, profile management, and direct company communication – all in a clean and responsive UI.',
    description: `
## About the Product
Swastik MCX is a finance & trading application designed for commodity and forex traders who need **accurate, real-time price tracking** on the go.  
The app delivers live MCX rates in an intuitive, mobile-first UI with fast updates, ensuring users can make better trading decisions anytime, anywhere.

## Key Features
- **User Authentication**: Secure login & registration with Firebase backend  
- **Live Commodity & Forex Rates**: Real-time updates powered by APIs  
- **Profile Management**: Users can manage personal details & preferences  
- **Direct Contact Support**: Integrated messaging to connect with the company  
- **Smooth UI/UX**: Optimized design for finance professionals & beginners alike  
- **Cross-platform Compatibility**: Built using React Native for Android & future iOS support  

## Version & Release
- **Version:** 1.0.0  
- **Released:** 17 Feb 2025  
- **Last Updated:** 12 Mar 2025  
- **Installs:** 100+  

## Our Role
End-to-end development including **architecture, UI/UX design, real-time data integration, authentication, backend APIs, and deployment**. We also optimized performance for live data rendering to handle financial market updates efficiently.
`
  },
  {
    id: '3',
    title: 'CarLink – Car Rental App',
    tech: ['Flutter', 'Laravel', 'MySQL', 'Firebase Auth', 'AWS S3', 'Google Maps API', 'Karza/Signzy/Digilocker APIs', 'Twilio/Msg91'],
    client: 'Confidential',
    industry: 'Automobile / Mobility / Rental',
    images: '/carlink-mockup2.png',
    logo: '/carlink-logo.webp',
    summary:
      'CarLink is a next-gen car rental platform enabling users to book cars on-demand with real-time availability, secure KYC verification, and flexible payment options. Designed with Flutter for a smooth cross-platform experience and powered by Laravel & Firebase, the app ensures fast, secure, and scalable performance.',
    description: `
## About the Product
CarLink transforms urban mobility by providing an intuitive platform for car rentals. With real-time availability, location-based browsing, and seamless booking, users can rent vehicles quickly and securely. The app supports both light and dark themes for a modern and accessible experience across Android and iOS devices.

## Key Features
- **User Authentication** via Firebase / Laravel Sanctum with OTP verification  
- **KYC Verification** with Aadhaar, Driving License, or PAN (Karza, Signzy, or Digilocker integration)  
- **Browse & Book Cars** by type, price, or availability in real time  
- **Favorites & Wishlists** for quick access to preferred cars  
- **Booking Management** including upcoming, current, and past rentals  
- **Profile & Wallet** with secure payments and payouts  
- **Google Maps Integration** for live pickup & drop-off locations  
- **Dark & Light Modes** for a seamless user experience  

## Version & Release
- **Version:** 1.0.0  
- **Released:** Aug 2025  
- **Last Updated:** Aug 2025  
- **Installs:** 500+  

## Our Role
Complete architecture design, Flutter development, Laravel backend with MySQL, secure KYC integrations, payment & OTP setup, AWS hosting, UI/UX implementation for both themes, and deployment support.
`
  },
];

import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Source Code Development | We Build Software That Powers Real Businesses",
  description: "From concept to launch, we combine a product-owner mindset with battle-tested development expertise to create custom websites, mobile apps, and web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.sourcecodes.co.za/#organization",
        "name": "Source Code Development",
        "url": "https://www.sourcecodes.co.za/",
        "logo": "https://www.sourcecodes.co.za/logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+27-72-541-3028",
          "contactType": "customer service",
          "email": "info@sourcecodes.co.za",
          "areaServed": "ZA",
          "availableLanguage": "English"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "11740 sekwati street, zone 7a",
          "addressLocality": "Sebokeng",
          "postalCode": "1983",
          "addressCountry": "ZA"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.sourcecodes.co.za/#website",
        "url": "https://www.sourcecodes.co.za/",
        "name": "Source Code Development",
        "description": "Custom software development, web design, and mobile application development.",
        "publisher": {
          "@id": "https://www.sourcecodes.co.za/#organization"
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://www.sourcecodes.co.za/#service",
        "name": "Source Code Development",
        "image": "https://www.sourcecodes.co.za/logo.png",
        "url": "https://www.sourcecodes.co.za/",
        "telephone": "+27-72-541-3028",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "11740 sekwati street, zone 7a",
          "addressLocality": "Sebokeng",
          "postalCode": "1983",
          "addressCountry": "ZA"
        },
        "priceRange": "ZAR",
        "openingHours": "Mo-Fr 08:00-17:00"
      }
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

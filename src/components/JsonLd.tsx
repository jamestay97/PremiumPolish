import { business, siteUrl } from "@/lib/site";

export default function JsonLd() {
  const address = business.address;
  const fullAddress = `${address.street}, ${address.city}, ${address.state} ${address.postalCode}`;

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#business`,
    name: business.name,
    description: business.description,
    url: siteUrl,
    image: `${siteUrl}/images/og-cover.jpg`,
    telephone: business.phones.call.map((p) => p.tel),
    email: business.emails[0],
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.postalCode,
      addressCountry: address.country,
    },
    areaServed: business.serviceArea.map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
    openingHoursSpecification: business.hours.days.map((day) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: day,
      opens: business.hours.opens,
      closes: business.hours.closes,
    })),
    priceRange: "$$",
    foundingDate: business.founded,
    knowsAbout: [
      "Pressure washing",
      "Mobile carwash",
      "Driveway cleaning",
      "Deck cleaning",
      "Commercial exterior cleaning",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cleaning Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Pressure Washing",
            description:
              "Residential and commercial pressure washing for driveways, decks, siding, and more.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobile Carwash",
            description: "Full-service mobile detailing at your location.",
          },
        },
      ],
    },
  };

  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: business.name,
    description: business.description,
    publisher: { "@id": `${siteUrl}/#business` },
    inLanguage: "en-US",
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}/#webpage`,
    url: siteUrl,
    name: business.name,
    description: business.description,
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#business` },
    inLanguage: "en-US",
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
    ],
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What areas does Prestige Polish serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Prestige Polish serves ${business.serviceArea.join(", ")}.`,
        },
      },
      {
        "@type": "Question",
        name: "What services does Prestige Polish offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer pressure washing for homes and businesses, mobile carwash and detailing, and commercial specialty services including sidewalk washing, gum removal, and parking lot cleaning.",
        },
      },
      {
        "@type": "Question",
        name: "How can I book Prestige Polish?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Call ${business.phones.call.map((p) => p.display).join(", ")}, text ${business.phones.text.display}, or email ${business.emails[0]}.`,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
      {/* Visible address for crawlers that skip JSON-LD */}
      <address className="sr-only">{fullAddress}</address>
    </>
  );
}

/** Site URL — set NEXT_PUBLIC_SITE_URL in production (e.g. Vercel env) */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://prestigepolish.com";

export const business = {
  name: "Prestige Polish LLC",
  legalName: "Prestige Polish LLC",
  tagline: "Premium Pressure Washing & Mobile Carwash",
  description:
    "Professional pressure washing and mobile carwash serving Long Island, Brooklyn, Queens, and surrounding areas. Residential and commercial. Fully insured. Available 7 days a week.",
  serviceArea: [
    "Long Island, NY",
    "Brooklyn, NY",
    "Queens, NY",
    "Bronx, NY",
    "Surrounding areas",
  ],
  address: {
    street: "2701 Waterbury Ave",
    city: "Bronx",
    state: "NY",
    postalCode: "10461",
    country: "US",
  },
  phones: {
    call: [
      { display: "(347) 757-1186", tel: "+13477571186" },
      { display: "(863) 521-7429", tel: "+18635217429" },
      { display: "(347) 261-6279", tel: "+13472616279" },
    ],
    text: { display: "(407) 818-5098", sms: "+14078185098" },
  },
  emails: ["prestigepolish42@gmail.com", "prestigepolish42@yahoo.com"],
  hours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "07:00",
    closes: "19:00",
  },
  founded: "2021",
  keywords: [
    "pressure washing Long Island",
    "pressure washing Brooklyn",
    "pressure washing Queens",
    "mobile carwash Long Island",
    "driveway cleaning",
    "deck cleaning",
    "house washing",
    "commercial pressure washing",
    "Prestige Polish",
  ],
} as const;

export const seo = {
  title: `${business.name} | ${business.tagline}`,
  description: business.description,
  ogImage: "/images/og-cover.jpg",
} as const;

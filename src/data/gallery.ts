export interface GalleryItem {
  src: string;
  alt: string;
  title: string;
  caption: string;
}

export const houseWashingPhotos: GalleryItem[] = [
  {
    src: "/images/house-washing/house-1.jpg",
    alt: "Residential driveway and exterior pressure washing",
    title: "Driveway & Exterior Wash",
    caption: "Professional cleaning for homes and driveways",
  },
  {
    src: "/images/house-washing/house-2.jpg",
    alt: "House washing service in progress",
    title: "House Washing",
    caption: "Restoring curb appeal one property at a time",
  },
  {
    src: "/images/house-washing/house-3.jpeg",
    alt: "Power washing a concrete driveway with visible clean results",
    title: "Driveway Transformation",
    caption: "Before & after — dramatic concrete restoration",
  },
  {
    src: "/images/house-washing/house-4.jpeg",
    alt: "Technician pressure washing a residential driveway",
    title: "Driveway Cleaning",
    caption: "High-pressure restoration in action",
  },
  {
    src: "/images/house-washing/house-5.jpeg",
    alt: "Fence before and after pressure washing split comparison",
    title: "Fence Restoration",
    caption: "Mold and weathering removed — like-new wood",
  },
  {
    src: "/images/house-washing/house-6.jpeg",
    alt: "Wooden fence pressure washing before and after",
    title: "Fence Before & After",
    caption: "Visible results on weathered wood fencing",
  },
  {
    src: "/images/house-washing/house-7.jpg",
    alt: "Worker pressure washing outdoor patio pavers",
    title: "Patio & Paver Cleaning",
    caption: "Patios, walkways, and hardscape surfaces",
  },
  {
    src: "/images/house-washing/house-8.webp",
    alt: "Close-up of pressure washer cleaning a brick patio",
    title: "Brick Patio Wash",
    caption: "Deep clean for brick and stone surfaces",
  },
];

export const carWashingPhotos: GalleryItem[] = [
  {
    src: "/images/car-washing/car-1.webp",
    alt: "Hand washing a car with sponge and soapy water",
    title: "Hand Wash Detail",
    caption: "Careful, thorough exterior cleaning",
  },
  {
    src: "/images/car-washing/car-2.jpeg",
    alt: "Jeep covered in snow foam during mobile carwash",
    title: "Snow Foam Treatment",
    caption: "Premium foam pre-wash detailing",
  },
  {
    src: "/images/car-washing/car-3.jpg",
    alt: "Professional mobile carwash service",
    title: "Mobile Detailing",
    caption: "Full-service wash at your location",
  },
  {
    src: "/images/car-washing/car-4.jpg",
    alt: "Exterior car cleaning and polish",
    title: "Exterior Shine",
    caption: "Showroom-level finish",
  },
  {
    src: "/images/car-washing/car-5.jpg",
    alt: "Car wash technician cleaning a vehicle",
    title: "Pro Car Care",
    caption: "Expert hands, premium products",
  },
  {
    src: "/images/car-washing/car-6.jpg",
    alt: "Vehicle being washed with high-pressure water",
    title: "Deep Exterior Clean",
    caption: "Thorough wash for every vehicle type",
  },
  {
    src: "/images/car-washing/car-7.jpg",
    alt: "Mobile carwash service at customer location",
    title: "On-Site Service",
    caption: "We come to you — 7 days a week",
  },
  {
    src: "/images/car-washing/car-8.jpg",
    alt: "Professional auto detailing in progress",
    title: "Auto Detailing",
    caption: "Inside and out — wherever you are",
  },
];

/** Highlight photos for the large side-by-side showcase */
export const featuredHousePhoto = houseWashingPhotos[4]; // Fence before & after
export const featuredCarPhoto = carWashingPhotos[1]; // Snow foam treatment

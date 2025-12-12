export interface homeDataType {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
  };
  gallery: {
    title: string;
    description: string;
    images: string[];
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
  };
  contact: {
    title: string;
    description: string;
    image: string;
  };
}

export const homeData: homeDataType = {
  hero: {
    title: "Welcome to Furniture Haven",
    subtitle: "Crafting Comfort, One Piece at a Time",
    description:
      "Discover our exquisite collection of handcrafted furniture that blends style and functionality. From modern designs to timeless classics, we have something for every home.",
    image: "/assets/images/home/blue_chair.png",
  },
  gallery: {
    title: "Our Gallery",
    description:
      "Explore our diverse range of furniture pieces, each designed to elevate your living space. Browse through our curated selection and find the perfect fit for your home.",
    images: [
      "/assets/images/home/gallery1.jpg",
      "/assets/images/home/gallery2.jpg",
      "/assets/images/home/gallery3.jpg",
      "/assets/images/home/gallery4.jpg",
    ],
  },
  about: {
    title: "Our Story",
    subtitle: "",
    description: `Born from the meaning of space. Todana takes its name from the
      Japanese 戸棚, a word that represents both order and quiet utility. We
      design furniture that embraces these values — blending architectural
      clarity with human warmth. Our Philosophy Minimal form. Maximum
      intention. We believe that furniture should do more than fill a room —
      it should shape how you feel inside it. Our work is guided by three
      principles: Purity of Form — Simple lines, bold geometry, considered
      proportions. Honest Materials — Wood, steel, stone, fabrics that
      reveal their natural character. Crafted Longevity — Built to endure,
      age gracefully, and remain relevant. Design Process Each piece begins
      as a study of structure: balance, silhouette, weight, and rhythm. From
      sketch to prototype to final finish, we combine modern techniques with
      traditional craftsmanship to create furniture that is both functional
      and poetic.`,
    image: "/assets/images/logo/logo_primary.svg",
  },
  contact: {
    title: "Get in Touch",
    description:
      "Have questions or need assistance? Our friendly team is here to help. Reach out to us for inquiries, custom orders, or any other information you may need.",
    image: "/assets/images/home/contact.jpg",
  },
};

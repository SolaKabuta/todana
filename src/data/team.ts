export interface TeamMember {
  name: string;
  role: string;
  photo: string;
  bio: string;
}

export const teamMembers = [
  {
    name: "Mykyta Orban",
    role: "Full Stack Developer",
    photo: "/assets/images/team/myky.png",
    bio: "Mykyta has over 10 years of experience in web development , specializing in modern and sustainable UI components."
  },
  {
    name: "Sola Kabuta",
    role: "Front-End Developer & Web Designer",
    photo: "/assets/images/team/sola.png",
    photo_hover: "/assets/images/team/sam.png",
    bio: "Sola is a skilled craftsman with a passion for creating high-quality wooden furniture."
  },
  {
    name: "Sam Darry",
    role: "Full Stack Developer",
    photo: "/assets/images/team/sam.png",
    bio: "Catherine brings a keen eye for aesthetics and functionality to every project she undertakes."
  },
  {
    name: "Reda Kim",
    role: "Expert Wanta Chocolate",
    photo: "/assets/images/team/reda.png",
    bio: "Reda ensures that all projects are completed on time and within budget, coordinating between clients and the design team."
  }
];
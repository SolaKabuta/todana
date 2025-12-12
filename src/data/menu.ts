export interface MenuItem {
  label: string;         
  path: string;    
  image: string;        
}

export const menuItems: MenuItem[] = [
  { label: "Home", path: "/" , image: "/assets/images/navbar/pink_balloon.jpg"},
  { label: "Gallery", path: "/gallery", image: "/assets/images/navbar/gallery.jpg" },
  { label: "About", path: "/about", image: "/assets/images/navbar/team.jpg" },
  { label: "Contact", path: "/contact", image: "/assets/images/navbar/contact.jpg" },
]


export const socialMenuItems: MenuItem[] = [
  { label: "Instagram", path: "https://www.instagram.com/todana.design/", image: "/assets/images/navbar/instagram.jpg" },
  { label: "Pinterest", path: "https://www.pinterest.com/todanadesign/_saved/", image: "/assets/images/navbar/pinterest.jpg" },
  { label: "LinkedIn", path: "https://www.linkedin.com/company/todana-design/about/", image: "/assets/images/navbar/linkedin.jpg" },
]
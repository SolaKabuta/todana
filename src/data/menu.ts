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

export const contactMenuItems: MenuItem[] = [
  { label: "Email : contact.todana.design@gmail.com", path: "mailto:todana@gmail.com", image: "/assets/images/navbar/email.jpg" },
  { label: "Phone (Japan): +81 3-4520-8894", path: "tel:+1234567890", image: "/assets/images/navbar/phone.jpg" },
  { label: "Address: 2-11-3 Shibuya, Shibuya-ku, Tokyo 150-0002, Japan", path: "https://maps.app.goo.gl/vnWQNCuQDu1oa8idA", image: "/assets/images/navbar/location.jpg" },
]


export const socialMenuItems: MenuItem[] = [
  { label: "Instagram", path: "https://www.instagram.com/todana.design/", image: "/assets/images/navbar/instagram.jpg" },
  { label: "Pinterest", path: "https://www.pinterest.com/todanadesign/_saved/", image: "/assets/images/navbar/pinterest.jpg" },
  { label: "LinkedIn", path: "https://www.linkedin.com/company/todana-design/about/", image: "/assets/images/navbar/linkedin.jpg" },
  { label: "Twitter(X)", path: "", image: ""}
]
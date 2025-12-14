export interface MenuItem {
  label: string;         
  id: string;    
  path: string;    
  image: string;        
}

export const menuItems: MenuItem[] = [
  { label: "Home", id:"(O1)", path: "/" , image: "/assets/images/navbar/pink_balloon.jpg"},
  { label: "Gallery", id:"(O2)", path: "/gallery", image: "/assets/images/navbar/gallery.jpg" },
  { label: "Team", id:"(O3)", path: "#team", image: "/assets/images/navbar/gallery.jpg" },
  { label: "About", id:"(O4)", path: "/about", image: "/assets/images/navbar/team.jpg" },
  { label: "Contact", id:"(O5)", path: "/contact", image: "/assets/images/navbar/contact.jpg" },
]

export const contactMenuItems: MenuItem[] = [
  { label: "Email : contact.todana.design@gmail.com", id:"", path: "mailto:todana@gmail.com", image: "/assets/images/navbar/email.jpg" },
  { label: "Phone (Japan): +81 3-4520-8894", id:"", path: "tel:+1234567890", image: "/assets/images/navbar/phone.jpg" },
  { label: "Address: 2-11-3 Shibuya, Shibuya-ku, Tokyo 150-0002, Japan", id:"", path: "https://maps.app.goo.gl/vnWQNCuQDu1oa8idA", image: "/assets/images/navbar/location.jpg" },
]


export const socialMenuItems: MenuItem[] = [
  { label: "Behance", id:"", path: "https://www.behance.com/solakabuta/", image: "/assets/images/navbar/instagram.jpg" },
  { label: "Twitter(X)",id:"",  path: "", image: ""},
  { label: "LinkedIn", id:"", path: "https://www.linkedin.com/in/sola-kabuta/", image: "/assets/images/navbar/linkedin.jpg" },
]
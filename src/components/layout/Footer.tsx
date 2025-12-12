
// src/components/layout/Navbar.tsx
import { useRef  } from "react";
import { useGSAP } from "@gsap/react";
// import { menuItems } from "@/data/menu";

export default function Footer() {
  // const [isOpen, setIsOpen] = useState<boolean>(false);
  
  const footerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    
    // gsap.from ("#navbar-overlay", {
    //   y: 100,
    // })
    
    
  }, {scope: footerRef});

  

  return (
    <footer ref={footerRef} className="w-screen min-h-screen bg-secondary" >
      
    </footer>
  );
}

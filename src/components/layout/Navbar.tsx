// src/components/layout/Navbar.tsx
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap"
// import { menuItems } from "@/data/menu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const containerRef = useRef<HTMLElement>(null);
  
  const tl = useRef<gsap.core.Timeline>();

  useGSAP(
    () => {
      tl.current = gsap.timeline({ 
            paused: true,
            defaults: { ease: "power3.inOut" } 
          });
      
          // --- CONSTRUCTION DE L'ANIMATION ---
          
          tl.current
            // Étape A : Le fond noir apparaît (FADE IN)
            // On utilise 'to' car on part de l'état CSS (invisible) vers visible
            .to(".backdrop-overlay", {
              opacity: 1,
              visibility: "visible", // Astuce: on le rend 'visible' pour qu'il soit cliquable
              duration: 0.5
            })
            
            // Étape B : Le panneau blanc descend
            .to("#navbar-overlay", {
              y: 0, // Revient à sa place d'origine (on va le décaler en CSS)
              opacity: 1,
              duration: 1,
              visibility: "visible",
            }, "<"); // "<" = En même temps que le fond noir
          
              
      
        }, { scope: containerRef }); // Scope vital !pe vital !

  useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = "hidden"; // Bloque le scroll
        tl.current?.play();
      } else {
        document.body.style.overflow = ""; // Débloque le scroll
        tl.current?.reverse();
      }
    }, [isOpen]);


  const handleToggle = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav
      ref={containerRef}
      className="flex justify-center items-center"
      aria-label="Primary Navigation"
    >
      {/* -- Burger Menu -- */}
      <section className="fixed z-70 top-0 left-0 right-0 flex items-center justify-center p-5">
        <div className="flex items-center gap-4">
          <button
            onClick={handleToggle}
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="navbar-overlay"
            className="flex flex-col items-center justify-center gap-1 transition-all duration-300 rounded-full cursor-pointer w-14 h-14 md:w-20 md:h-10"
          >
            <span className={`block w-8 h-0.5 bg-secondary rounded-full transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}   />
            <span className={`block w-8 h-0.5 bg-secondary rounded-full transition-transform duration-300 ${isOpen ? "-rotate-45" : ""}`}   />
          </button>
        </div>
      </section>

      {/* -- Menu Overlay -- */}
      <section>
      
        <div onClick={handleToggle} className="backdrop-overlay fixed inset-0 z-60 bg-black/80 opacity-0 invisible"></div>
        <div id="navbar-overlay" className="invisible fixed z-70 top-20 left-1/2 -translate-x-1/2 bg-white rounded-b-xl h-[80vh] w-full lg:w-[500px] -translate-y-full opacity-0 shadow-2xl flex items-center justify-center">
          
        </div>
        {/* -- Black Screen Overlay -- */}
        
      </section>
        
    </nav>
  );
}

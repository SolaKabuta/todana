// src/components/layout/Navbar.tsx
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap"
// import { menuItems } from "@/data/menu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const overlayRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to ("#navbar-overlay", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        delay: 0.5,
        ease: "back.out(1.7)",
      })
    },
    {},
  );

  useEffect(() => {
    const original = document.body.style.overflow;
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = original || "";
    }
    return () => {
      document.body.style.overflow = original || "";
    };
  }, [isOpen]);

  const handleToggle = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav
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
            <span className="block w-8 h-0.5 bg-secondary rounded-full origin-center" />
            <span className="block w-8 h-0.5 bg-secondary rounded-full origin-center" />
          </button>
        </div>
      </section>

      {/* -- Menu Overlay -- */}
      {isOpen && 
      <section ref={overlayRef} className="">
        <div id="navbar-overlay" className="fixed z-70 top-20 left-1/2 -translate-x-1/2 items-center bg-white rounded-xl h-full lg:w-[500px]">
          
        </div>
        {/* -- Black Screen Overlay -- */}
        <div onClick={handleToggle} className="fixed z-60 left-1/2 -translate-x-1/2 bg-black opacity-60 w-screen h-screen"></div>
      </section>}
    </nav>
  );
}

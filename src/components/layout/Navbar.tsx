
// src/components/layout/Navbar.tsx
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { menuItems } from "@/data/menu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  const overlayRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    
    // gsap.from ("#navbar-overlay", {
    //   y: 100,
    // })
    
    
  }, {scope: overlayRef});

  
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
    <nav className="flex justify-center items-center" aria-label="Primary Navigation">
      {/* -- Burger Menu -- */}
      <section className="fixed z-60 top-0 left-0 right-0 flex items-center justify-center p-5">
        <div className="flex items-center gap-4 transition duration-300 hover:bg-secondary/80 rounded-lg">
          <button
            onClick={handleToggle}
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="navbar-overlay"
            className="flex flex-col items-center justify-center gap-1 transition-all duration-300 rounded-full cursor-pointer w-14 h-14 md:w-20 md:h-10"
          >
            <span className="block w-8 h-0.5 bg-black rounded-full origin-center" />
            <span className="block w-8 h-0.5 bg-black rounded-full origin-center" />
          </button>
        </div>
      </section>

      {/* -- Menu Overlay -- */}
      {isOpen && (
        <section
          ref={overlayRef}
          id="navbar-overlay"
          className="fixed inset-0 z-50 grid place-items-center bg-primary"
        >
          {/* <div className="absolute inset-0 bg-black/20 pointer-events-none" /> */}

          <div className="text-center font-black uppercase w-full">
            <ul className="relative">
              {menuItems.map((item) => (
                <li
                  key={item.path}
                  className="group relative text-6xl md:text-9xl h-1/5 p-9 transition duration-300 hover:bg-white hover:text-primary"
                >
                  <a href={item.path} className="inline-block">
                    {item.label}
                  </a>

                  <img
                    className="absolute rounded-lg top-0 right-40 rotate-12 shadow-lg transition duration-300 opacity-0 group-hover:opacity-100 pointer-events-none"
                    src={item.image}
                    alt={`${item.label} preview`}
                    width={220}
                    height={220}
                    loading="lazy"
                    decoding="async"
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </nav>
  );
}

"use client";

import { menuItems, socialMenuItems } from "@/data/menu";
import { useEffect, useRef, useState } from "react";
import { useTransition } from "./TransitionProvider";
import { useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { navigateWithTransition } = useTransition();
  const router = useRouter();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith("/")) {
      e.preventDefault();
      // On masque immédiatement le menu pour ne pas polluer l'animation de transition !
      tl.current?.progress(0).pause();
      setIsOpen(false);
      navigateWithTransition(path);
    }
  };

  // 1. On attache la ref au container GLOBAL (nav) pour tout contrôler dedans
  const containerRef = useRef<HTMLElement>(null);

  // 2. On utilise useRef au lieu de useState pour la timeline
  // (Meilleure performance : pas de re-rendu quand on la stocke)
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      // 3. On crée la timeline en PAUSE.
      // Elle attend nos ordres.
      tl.current = gsap.timeline({
        paused: true,
        defaults: { ease: "power3.inOut" },
      });

      // --- CONSTRUCTION DE L'ANIMATION ---

      tl.current
        // Étape A : Le fond noir apparaît (FADE IN)
        // On utilise 'to' car on part de l'état CSS (invisible) vers visible
        .to(".backdrop-overlay", {
          opacity: 1,
          visibility: "visible", // Astuce: on le rend 'visible' pour qu'il soit cliquable
          duration: 0.5,
        })

        // Étape B : Le panneau blanc descend
        .to(
          "#navbar-overlay",
          {
            y: 0, // Revient à sa place d'origine (on va le décaler en CSS)
            opacity: 1,
            duration: 1,
            visibility: "visible",
          },
          "<",
        ); // "<" = En même temps que le fond noir

      gsap.from(".nav-links", {
        y: 50,
        duration: 1,
        stagger: 0.8,

        scrollTrigger: {
          trigger: ".nav-links",
          start: "top 100%",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      });

    },
    { scope: containerRef },
  ); // Scope vital !pe vital !

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
      <section className="fixed z-[70] top-0 left-0 right-0 flex items-center justify-center p-5">
        <div className="flex items-center gap-4">
          <button
            onClick={handleToggle}
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="navbar-overlay"
            className="flex flex-col items-center justify-center gap-1 transition-all duration-300 rounded-full cursor-pointer w-14 h-14 md:w-20 md:h-10"
          >
            <span
              className={`block w-8 h-0.5 bg-secondary rounded-full transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}
            />
            <span
              className={`block w-8 h-0.5 bg-secondary rounded-full transition-transform duration-300 ${isOpen ? "-rotate-45" : ""}`}
            />
          </button>
        </div>
      </section>

      {/* -- Menu Overlay -- */}
      <section>
        {/* -- Black Screen Overlay -- */}
        <div onClick={handleToggle} className="backdrop-overlay fixed inset-0 z-[60] bg-black/80 opacity-0 invisible"></div>
        {/* -- Actual Menu Overlay -- */}
        <div
          id="navbar-overlay"
          className="invisible fixed z-[70] top-20 left-1/2 -translate-x-1/2 bg-white rounded-xl h-[80vh] w-full lg:w-[500px] -translate-y-full opacity-0 shadow-2xl flex items-center justify-center"
        >
          {/* -- Nav Links -- */}
          <div className="grid place-items-center ">
            {menuItems.map((item, index) => (
            <ul key={index} className="text-5xl pb-3 w-full">
              <li><a onClick={(e) => handleLinkClick(e, item.path)} onMouseEnter={() => router.prefetch(item.path)} className="w-full transition duration-300 hover:text-secondary" href={item.path}>/ {item.label}<span className="ml-13 text-xs float-end">{item.id}</span></a></li>
            </ul>
          ))}
            {/* -- Social Links -- */}
            <div className="pt-20">
              {socialMenuItems.map((item, index) => (
            <ul key={index}>
              <li><a onClick={(e) => handleLinkClick(e, item.path)} onMouseEnter={() => router.prefetch(item.path)} className="w-full transition duration-300 hover:text-secondary" href={item.path}>{item.label}<span className="ml-13 text-xs float-end">{item.id}</span></a></li>
            </ul>
          ))}
            </div>
          </div>
        </div>
      </section>
    </nav>
  );
}

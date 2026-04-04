"use client";

import { createContext, useContext, useRef, useState, ReactNode, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// 1. On définit la forme de notre Contexte
type TransitionContextType = {
  navigateWithTransition: (to: string) => void;
};

const TransitionContext = createContext<TransitionContextType>({
  navigateWithTransition: () => {},
});

export const TransitionProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  
  // Notre rideau (l'overlay)
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  
  // État pour savoir si on est en train d'animer (pour bloquer les doubles clics)
  const [isTransitioning, setIsTransitioning] = useState(false);
  const targetPath = useRef<string | null>(null);

  // Notre Timeline stockée
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    // On définit l'animation du rideau UNE FOIS
    tl.current = gsap.timeline({ paused: true })
      
      // Étape 1 : Le rideau monte (couvre l'écran)
      .to(overlayRef.current, {
        scaleY: 1,           // Passe de 0 à 100% de hauteur
        transformOrigin: "bottom", // Part du bas
        duration: 0.35,
        ease: "power4.inOut"
      })
      
      // Étape 2 : Changement de "transformOrigin" pour la sortie
      // Astuce Senior : Pour que le rideau continue de monter vers le haut au lieu de redescendre
      .set(overlayRef.current, {
        transformOrigin: "top" 
      })
      
      // Étape 3 : Le rideau disparaît vers le haut
      .to(overlayRef.current, {
        scaleY: 0,
        duration: 0.35,
        ease: "power4.inOut"
      });

  }, { scope: containerRef });

  // --- LA FONCTION MAGIQUE ---
  // Correction pour la timeline "Pass Through" (Traversée)
  // La logique précédente était complexe. Faisons plus simple avec des callbacks.
  
  const simpleNavigate = (to: string) => {
      if (isTransitioning || pathname === to) return;
      setIsTransitioning(true);
      targetPath.current = to;

      // A. RIDEAU MONTE
      gsap.to(overlayRef.current, {
          scaleY: 1,
          transformOrigin: "bottom",
          duration: 0.35,
          ease: "power4.inOut",
          onComplete: () => {
              // B. CHANGEMENT DE PAGE
              // Next.js va prendre le relais, ce processus est lourd donc on laisse la main.
              router.push(to);
          }
      });
  }

  // C. RIDEAU DESCEND (vers le haut)
  // On écoute le changement de route. Quand Next.js a fini de charger la nouvelle page (montage terminé),
  // on retire le rideau en douceur !
  useEffect(() => {
      if (targetPath.current === pathname) {
        requestAnimationFrame(() => {
            gsap.to(overlayRef.current, {
                scaleY: 0,
                transformOrigin: "top",
                duration: 0.35,
                ease: "power4.inOut",
                onComplete: () => {
                    setIsTransitioning(false);
                    targetPath.current = null;
                    // Reset pour la prochaine fois
                    gsap.set(overlayRef.current, { transformOrigin: "bottom" });
                }
            });
        });
      }
  }, [pathname]);

  return (
    <TransitionContext.Provider value={{ navigateWithTransition: simpleNavigate }}>
      <div ref={containerRef}>
        {/* LE RIDEAU (OVERLAY) */}
        {/* scale-y-0 : écrasé au sol par défaut */}
        <div 
            ref={overlayRef}
            className="fixed inset-0 bg-black z-[9999] pointer-events-none scale-y-0"
        />
        
        {children}
      </div>
    </TransitionContext.Provider>
  );
};

// Hook personnalisé pour utiliser la transition facilement
export const useTransition = () => useContext(TransitionContext);
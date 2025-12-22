import { createContext, useContext, useRef, useState, ReactNode } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
  const navigate = useNavigate();
  const location = useLocation();
  
  // Notre rideau (l'overlay)
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  
  // État pour savoir si on est en train d'animer (pour bloquer les doubles clics)
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Notre Timeline stockée
  const tl = useRef<gsap.core.Timeline>();

  useGSAP(() => {
    // On définit l'animation du rideau UNE FOIS
    tl.current = gsap.timeline({ paused: true })
      
      // Étape 1 : Le rideau monte (couvre l'écran)
      .to(overlayRef.current, {
        scaleY: 1,           // Passe de 0 à 100% de hauteur
        transformOrigin: "bottom", // Part du bas
        duration: 0.8,
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
        duration: 0.8,
        ease: "power4.inOut"
      });

  }, { scope: containerRef });

  // --- LA FONCTION MAGIQUE ---
  const navigateWithTransition = (to: string) => {
    // Sécurité : Si on est déjà en transition ou si on va sur la même page, on ne fait rien
    if (isTransitioning || location.pathname === to) return;

    setIsTransitioning(true);

    // 1. On joue la première moitié de l'animation (Le rideau couvre l'écran)
    // tweenTo accepte un temps ou un label. Ici on triche un peu en calculant la moitié.
    // Mais pour faire simple, on va jouer jusqu'au changement d'origine.
    
    tl.current?.play().then(() => {
        // C'est ici, quand l'écran est TOUT NOIR, qu'on change de page
        navigate(to);
        
        // Petite pause pour laisser React charger la nouvelle page
        // (Optionnel mais recommandé pour les grosses pages)
        setTimeout(() => {
            // 2. On finit l'animation (Le rideau se révèle)
            // On redémarre l'anim depuis la fin de l'étape 1 ? 
            // Non, GSAP est malin. Comme on a fait un play() complet, il faut ruser.
            // Le plus simple pour ce style "Pass through" est de faire restart() 
            // MAIS on va utiliser une méthode plus simple :
            
            // On a joué toute la timeline ? Non.
            // Simplifions la timeline pour toi :
        }, 100);
    });
  };
  
  // Correction pour la timeline "Pass Through" (Traversée)
  // La logique précédente était complexe. Faisons plus simple avec des callbacks.
  
  const simpleNavigate = (to: string) => {
      if (isTransitioning || location.pathname === to) return;
      setIsTransitioning(true);

      // A. RIDEAU MONTE
      gsap.to(overlayRef.current, {
          scaleY: 1,
          transformOrigin: "bottom",
          duration: 0.6,
          ease: "power3.inOut",
          onComplete: () => {
              // B. CHANGEMENT DE PAGE
              navigate(to);
              
              // C. RIDEAU DESCEND (vers le haut)
              // On attend un tout petit peu que le DOM se mette à jour
              gsap.to(overlayRef.current, {
                  scaleY: 0,
                  transformOrigin: "top",
                  duration: 0.6,
                  ease: "power3.inOut",
                  delay: 0.1,
                  onComplete: () => {
                      setIsTransitioning(false);
                      // Reset pour la prochaine fois
                      gsap.set(overlayRef.current, { transformOrigin: "bottom" });
                  }
              });
          }
      });
  }

  return (
    <TransitionContext.Provider value={{ navigateWithTransition: simpleNavigate }}>
      <div ref={containerRef}>
        {/* LE RIDEAU (OVERLAY) */}
        {/* scale-y-0 : écrasé au sol par défaut */}
        <div 
            ref={overlayRef}
            className="fixed inset-0 bg-black z-9999 pointer-events-none scale-y-0"
        />
        
        {children}
      </div>
    </TransitionContext.Provider>
  );
};

// Hook personnalisé pour utiliser la transition facilement
export const useTransition = () => useContext(TransitionContext);
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Story() {
  
  const containerRef = useRef<HTMLDivElement>(null);
 
  useGSAP(() => {
    
    gsap.from(".appear", {
      
      y: 80,
      rotation:-10,
      duration: 1,
      
      scrollTrigger: {
        trigger: ".appear",
        start: "top 100%",
        scrub: 1,
        toggleActions: "play none none reverse"
      }
      
      
    })
    
    gsap.to(".rotation", {
      rotation: 360,          
      duration: 6,
      repeat: -2,
    });
    
  }, {scope: containerRef})
  
  
  return (
    <main ref={containerRef} className="relative w-screen min-h-screen grid place-content-center">
      {/* -- Background Image -- */}
      <div className="w-screen min-h-screen">
        <img
          className="object-cover w-full h-full"
          src="assets/images/home/interior.jpg"
          alt="gallery section cover image"
        />
      </div>
      {/* -- Description Card -- */}
      <div className="appear w-80 md:w-[600px] lg:w-[900px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-accent text-primary text-center rounded-lg p-10">
        <div className="flex flex-col md:flex-row justify-center md:gap-3 items-center">
          <img className="rotation size-6" src="/assets/icons/wheel.svg" alt="" width={30} height={30}/>
        <h1 className="text-3xl md:text-5xl font-medium py-10">Our story<span className="text-xs align-top">(05)</span></h1>
        </div>
        <p className="text-xs md:text-lg text-balance">
          Born from the meaning of space. Todana takes its name from the
          Japanese 戸棚, a word that represents both order and quiet utility. We
          design furniture that embraces these values — blending architectural
          clarity with human warmth. Our Philosophy Minimal form. Maximum
          intention. We believe that furniture should do more than fill a room —
          it should shape how you feel inside it. 
          <span className="hidden md:block">
            Our work is guided by three
            principles: Purity of Form — Simple lines, bold geometry, considered
            proportions. Honest Materials — Wood, steel, stone, fabrics that
            reveal their natural character. Crafted Longevity — Built to endure,
            age gracefully, and remain relevant. Design Process Each piece begins
            as a study of structure: balance, silhouette, weight, and rhythm. From
            sketch to prototype to final finish, we combine modern techniques with
            traditional craftsmanship to create furniture that is both functional
            and poetic.
          </span>
        </p>
        {/* -- Signature -- */}
        <div className="flex justify-center font-medium gap-3 items-center py-10">
          <p className="uppercase">戸棚 Todana</p>
          <img
            src="/assets/logo/logo_primary.svg"
            alt=""
            width={20}
            height={20}
          />
        </div>
        <Button>Let's conncet</Button>
      </div>
    </main>
  );
}

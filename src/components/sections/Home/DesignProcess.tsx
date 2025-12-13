import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
// interface Testimonials {
//   propName: type;
// }

export default function DesignProcess() {
  
  const containerRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    
    gsap.from("scroll", {
      
    })
    
  })
  
  return (
    
    
    <main ref={containerRef} className="h-screen w-screen bg-primary text-white pt-5">
      {/* -- Partners -- */}
      <h1 className="text-5xl">Design Process</h1>
    </main>
  );
}

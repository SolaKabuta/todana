import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
// interface Testimonials {
//   propName: type;
// }

export default function Testimonials() {
  
  const onScrollTextRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    
    gsap.from("scroll", {
      
    })
    
  })
  
  return (
    
    
    <main ref={onScrollTextRef} className="h-screen w-screen bg-primary text-white pt-5">
      <h1 className="text-5xl">Testimonials</h1>
    </main>
  );
}

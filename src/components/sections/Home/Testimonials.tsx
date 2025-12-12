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
      {/* -- Partners -- */}
      <div className="flex gap-3 justify-center items-center">
        <img src="/assets/logo/logo_white.svg" alt="todana logo" width={50} height={50}/>
        <p className="uppercase font-black">They trust us</p>
        <img src="/assets/logo/logo_white.svg" alt="todana logo" width={50} height={50}/>
      </div>
    </main>
  );
}

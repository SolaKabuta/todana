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
      <div className="flex gap-3 items-center">
              <img
                className="rotation"
                src="/assets/icons/wheel_white.svg"
                alt="wheel icon"
                width={30}
                height={30}
              />
              <h1 className="text-5xl py-10">
                Testimonials
                <span className="text-xs align-top">(07)</span>
              </h1>
            </div>
    </main>
  );
}

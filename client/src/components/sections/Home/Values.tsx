import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
// interface Testimonials {
//   propName: type;
// }

export default function Values() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from("scroll", {});
  });

  return (
    <main
      ref={containerRef}
      className="min-h-screen w-screen bg-accent text-primary pt-5 p-10"
    >
      <div className="flex gap-3 items-center">
        <img
          className="rotation"
          src="/assets/icons/wheel.svg"
          alt="wheel icon"
          width={30}
          height={30}
        />
        <h1 className="text-5xl py-10">
          Values
          <span className="text-xs align-top">(06)</span>
        </h1>
      </div>
      <section className="slide flex flex-col gap-3 pt-10">
       <div className="bg-primary h-80 rounded-xl w-full"></div> 
       <div className="bg-primary h-80 rounded-xl w-full"></div> 
       <div className="bg-primary h-80 rounded-xl w-full"></div> 
      </section>
    </main>
  );
}

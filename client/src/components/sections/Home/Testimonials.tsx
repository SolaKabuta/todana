import TestimonalCard from "@/components/layout/TestimonialCad";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
// interface Testimonials {
//   propName: type;
// }

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from("scroll", {});
  });

  return (
    <main
      ref={containerRef}
      className="min-h-screen w-screen bg-primary text-white p-10"
    >
      {/* -- Title -- */}
      <section className="flex gap-3 items-center">
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
      </section>
      <div className="">
        {/*<p className="pb-5">Results that speaks volume</p>*/}
        <p>
          Don't just take our words for it! Hear from our satisfied clients{" "}
          <br /> who have transformed their ideas through our craft.
        </p>
      </div>
      {/* -- Testimonials Section -- */}
      <section className="pt-10">
        <TestimonalCard/> 
      </section>
    </main>
  );
}

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
    gsap.from(".bottom-top", {
      y: 50,
      duration: 1,
      stagger: 0.8,

      scrollTrigger: {
        trigger: ".bottom-top",
        start: "top 100%",
        scrub: 1,
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <main
      ref={containerRef}
      className="bottom-top min-h-screen w-screen bg-accent text-primary pt-5"
    >
      <div className="bottom-top flex gap-3 items-center">
        <img
          className="rotation"
          src="/assets/icons/wheel.svg"
          alt="wheel icon"
          width={30}
          height={30}
        />
        <h1 className="text-5xl py-10">
          Values
          <span className="bottom-top text-xs align-top">(06)</span>
        </h1>
      </div>
      <section className="bottom-top flex flex-col gap-3 pt-10">
        <div className="bg-primary h-80 rounded-xl w-full"></div>
        <div className="bg-primary h-80 rounded-xl w-full"></div>
        <div className="bg-primary h-80 rounded-xl w-full"></div>
      </section>
    </main>
  );
}


import TeamCard from "@/components/team/TeamCard";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".appear", {
        y: 80,
        rotation: 5,
        duration: 1,

        scrollTrigger: {
          trigger: ".appear",
          start: "top 100%",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(".rotation", {
        rotation: 360,
        duration: 6,
        repeat: -2,
      });
    },
    { scope: containerRef },
  );

  return (
    <main
      ref={containerRef}
      className="relative bg-accent w-screen min-h-screen grid place-content-center p-10 pb-40"
    >
      <section className="appear">
      <div className="flex justify-center items-center gap-3 text-primary pb-5">
        <img className="rotation" src="/assets/icons/wheel.svg" alt="" width={30} height={30}/>
        <h1 className="text-5xl">Our team<span className="text-xs align-top">(03)</span></h1>
      </div>
      <p className="text-center text-primary pb-10">The Humble Creators of Your Dream Spaces</p>
      <div className="scale-90">
      <TeamCard />
      </div>
      </section>
    </main>
  );
}

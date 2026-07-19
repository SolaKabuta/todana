import { Button } from "@/components/ui/button";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const hasAnimated = sessionStorage.getItem("heroAnimated");

    if (!hasAnimated) {
      gsap.fromTo(".title",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          delay: 0.8, // Ensures the blackout curtain fully drops before it starts
          ease: "back.out(1.7)",
        }
      );
      sessionStorage.setItem("heroAnimated", "true");
    } else {
      gsap.set(".title", { opacity: 1, y: 0 });
    }

    // Icon animation

    gsap.to(".rotation", {
      rotation: 360,
      duration: 6,
      repeat: -2,
    });


  }, { scope: heroRef });

  return (
    <main ref={heroRef} className="relative z-30 bg-accent text-primary grid md:grid-cols-3 gap-20 place-content-center min-h-screen w-screen">
      <section className=" col-span-3 text-center [&_p]:py-5">
        <div className="title opacity-0 flex justify-center gap-2 md:gap-5 xl:items-center">
          <h1 className="text-5xl md:text-7xl xl:text-9xl uppercase font-black text-shadow-lg">
            <span className="relative -z-30">戸棚 </span> Todana
          </h1>
          <Image
            className="md:w-15 xl:w-40 "
            src="/assets/logo/logo_primary.svg"
            alt="todana logo"
            width={160}
            height={160}
          />
        </div>
        <div className="title opacity-0">
          <div className="flex justify-center gap-3 items-center">
            {/* -- Rotating Wheel Icon -- */}
            <Image className="rotation drop-shadow-xs" src="/assets/icons/wheel.svg" alt="wheel icon" width={30} height={30} />
            <p className="italic font-black">
              Design Elevated. Spaces Refined.
            </p>
          </div>
          <p className="text-xs md:text-sm text-balance">
            Inspired by the Japanese word 戸棚 — “todana”, meaning cabinet or
            shelving behind doors, <br />
            our philosophy blends function, purity, and timeless craftsmanship.
            We shape each piece to bring calm, character, and intention into
            your space.
          </p>
        </div>
        {/* -- Chair Hero Image -- */}
        <Image
          className="title opacity-0 absolute -z-20 top-165 md:top-10 lg:top-10 2xl:top-0 left-1/2 -translate-x-1/2"
          src="/assets/images/home/blue_chair.png"
          alt="hero chair"
          width={2500}
          height={1200}
          priority
        />
      </section>
      <div className="title opacity-0">
        <p className="italic font-black text-balance py-5">
          Furniture with a Quiet Confidence
        </p>
        <p className="text-xs md:text-sm">
          Where sculptural forms meet everyday comfort. <br />
          Where materials breathe. <br />
          Where design becomes a way of living.
        </p>
      </div>
      <div className="title opacity-0 flex justify-center items-center">
        <Button>Discover</Button>
      </div>
      <div className="title opacity-0 text-right text-xs md:text-sm text-balance">
        <p className="italic font-black py-5">Crafted for Modern Life</p>
        <p>
          From chairs and sofas to lighting and storage, <br /> every object is
          designed with architectural discipline — built to last, <br />{" "}
          designed to inspire.
        </p>
      </div>
    </main>
  );
}

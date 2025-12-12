import { Button } from "@/components/ui/button";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".title", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      delay: 0.5,
      ease: "back.out(1.7)",
    });
    
    gsap.to(".rotation", {
      rotation: 360,          
      duration: 6,
      repeat: -2,
    });
    
  }, {});

  return (
    <main className="relative z-30 bg-accent text-primary grid md:grid-cols-3 gap-20 place-content-center min-h-screen w-screen px-10">
      <section ref={heroRef} className=" col-span-3 text-center [&_p]:py-5">
        <div className="title flex justify-center gap-2 md:gap-5 xl:items-center">
          <h1 className="text-5xl md:text-7xl xl:text-9xl uppercase font-black">
            <span className="relative -z-30">戸棚 </span> Todana
          </h1>
          <img
            className="md:w-15 xl:w-40"
            src="/assets/logo/logo_primary.svg"
            alt="todana logo"
            width={30}
            height={30}
          />
        </div>
        <div className="title">
          <div className="flex justify-center gap-3 items-center">
            {/* -- Rotating Wheel Icon -- */}
            <img className="rotation" src="/assets/icons/wheel.svg" alt="wheel icon" width={30} height={30}/>
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
        <img
          className="title absolute -z-20 top-165 md:top-10 lg:top-10 2xl:top-0 left-1/2 -translate-x-1/2"
          src="/assets/images/home/blue_chair.png"
          alt=""
          width={2500}
          height={1200}
        />
      </section>
      <div className="title">
        <p className="italic font-black text-balance py-5">
          Furniture with a Quiet Confidence
        </p>
        <p className="text-xs md:text-sm">
          Where sculptural forms meet everyday comfort. <br />
          Where materials breathe. <br />
          Where design becomes a way of living.
        </p>
      </div>
      <div className="title flex justify-center items-center">
        <Button>Discover</Button>
      </div>
      <div className="title text-right text-xs md:text-sm text-balance">
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

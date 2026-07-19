import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
// import SplineCard from "@/components/layout/SplineCard";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function MaterialsAndCraft() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".slide", {
      y: 60,
      duration: 0.8,
      stagger: 0.15,

      scrollTrigger: {
        trigger: ".slide",
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });

    gsap.to(".rotation", {
      rotation: 360,
      duration: 6,
      repeat: -1,
      ease: "none",
    });
  }, { scope: containerRef });

  return (
    <main
      ref={containerRef}
      className="slide min-h-screen w-screen grid md:grid-cols-2 gap-10 bg-primary text-white p-10"
    >
      {/* -- Materials section -- */}
      <section className="slide hidden  md:col-start-1 row-span-full md:block gap-10">
        <div>
          {/*<SplineCard />*/}
        </div>
      </section>

      {/* -- Title and texts section -- */}
      <section className="slide md:col-start-2">
        <div className="flex gap-3 items-center">
          <Image
            className="rotation"
            src="/assets/icons/wheel_white.svg"
            alt="wheel icon"
            width={30}
            height={30}
          />
          <h1 className="text-5xl py-10">
            Materials and craft
            <span className="text-xs align-top">(02)</span>
          </h1>
        </div>
        <div>
          <p className="py-10">
            Honest materials. Thoughtful execution.
          </p>
          <p>
            We work with a restrained palette of materials chosen for their durability, texture, and aging qualities.
            Wood, metal, fabric — each material is selected to express its natural character while supporting long-term use.
          </p>
        </div>

        <div className="slide space-y-6">
          <p className="text-lg">
            Designed objects, curated into timeless collections.
          </p>

          <p>
            We select materials for integrity—woods that hold form, metals that
            feel calm, stones that invite touch, and textiles that breathe.
            Every piece balances structure with softness, precision with
            character.
          </p>

          <p>
            Guided by Japanese craftsmanship, our finish work favors honesty:
            hand‑rubbed oils, brushed metals, and subtle edges that age
            gracefully. The result is a coherent system—modular, expressive, and
            built to last.
          </p>

          {/* -- Micro-believability line -- */}
          <p className="text-sm opacity-75">
            Provenance: ash and oak from FSC‑certified forests, steel and stone
            from long‑standing workshops. Upholstery tested for abrasion and
            colorfastness.
          </p>
        </div>
        {/* -- CTAs -- */}
        <div className="slide flex flex-col lg:grid lg:grid-cols-3 gap-3 py-10">
          <Button variant={"secondary"}>Explore materials</Button>
          <Button variant={"secondary"}>See the craft process</Button>
          <Button variant={"outline"}>Request samples</Button>
          <Button variant={"outline"}>Read maeterial stories</Button>
          <Button variant={"outline"}>View specs & care </Button>
        </div>
      </section>

    </main>
  );
}

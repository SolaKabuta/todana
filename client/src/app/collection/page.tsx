"use client";

import { furnitures } from "@/data/furnitures";
import { useRef } from "react";
import Image from "next/image";

export default function Collection() {

  const containerRef = useRef<HTMLDivElement>(null);

  // Removed dead empty GSAP hook

  return (
    <main ref={containerRef} className="min-h-screen w-screen text-white grid items-center pb-10">
      {/* -- Title/Texts Section -- */}
      <section>
        <div className="flex gap-3 items-center">
          <Image
            className="rotation"
            src="/assets/icons/wheel_white.svg"
            alt="wheel icon"
            width={30}
            height={30}
          />
          <h1 className="text-5xl uppercase py-40">
            Collection <span className="text-xs align-top">(01)</span>
          </h1>
        </div>
        <div className="pb-40">
          <p>
            Each piece explores a dialogue between form, material,
            and space. From seating to lighting, every piece is <br />
            designed as part of a coherent system — modular, expressive, and
            built to last.
          </p>
        </div>
      </section>
      {/* -- Furniture Collection Section -- */}
      <section className="grid grid-cols-4 gap-3">
        {furnitures.map((item, index) => (
          <ul key={item.id || index}>
            <li>
              <Image 
                src={item.image} 
                alt={item.name} 
                width={500} 
                height={500}
                className="rounded-lg"
              />
            </li>
          </ul>
        ))}
      </section>
    </main>
  );
}

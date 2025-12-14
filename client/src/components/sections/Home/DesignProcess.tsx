import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function DesignProcess() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".slide-up", {
      y: 80,
      duration: 1,
      stagger: 0.8,

      scrollTrigger: {
        trigger: ".slide-up",
        start: "top 100%",
        scrub: 1,
        toggleActions: "play none none reverse",
      },
    });

    
  }, {});

  return (
    <main
      ref={containerRef}
      className="min-h-screen w-screen grid text-white p-10 py-20"
    >
      <div className="slide-up flex gap-3 items-center">
        <img
          className="rotation"
          src="/assets/icons/wheel_white.svg"
          alt="wheel icon"
          width={30}
          height={30}
        />
        <h1 className="text-5xl py-10">
          Design process
          <span className="text-xs align-top">(03)</span>
        </h1>
      </div>
      {/* -- Process Accordion Section  -- */}
      <section className="slide-up text-balance [&_p]:pb-10">
              <div>
                <Accordion
                  type="single"
                  collapsible
                  className=" text-white w-full rounded-lg"
                  defaultValue="item-1"
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="uppercase">
                      01 — Observation
                      Understanding space, usage, and human movement.
                    </AccordionTrigger>
                    <AccordionContent className="text-left normal-case flex flex-col gap-4 text-balance">
                      <p>
                        Todana designs contemporary, high-end furniture: chairs,
                        armchairs, sofas, tables, storage systems, and lighting
                        pieces. We work on complete collections as well as unique
                        objects crafted to elevate residential, commercial, and
                        hospitality spaces.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
      
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="uppercase">
                      02 — Form Exploration
                      Sketching volumes, proportions, and structural balance.
                    </AccordionTrigger>
                    <AccordionContent className="text-left normal-case flex flex-col gap-4 text-balance">
                      <p>
                        Our expertise lies in creating refined, architectural designs
                        inspired by Japanese aesthetics. We master the use of noble
                        materials—solid wood, brushed steel, premium fabrics—and craft
                        pieces where technical precision meets artisanal finesse.
                        Proportions, textures, and longevity are central to every
                        design.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
      
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="uppercase">
                      03 — Prototyping
                      Testing materials, comfort, and construction.
                    </AccordionTrigger>
                    <AccordionContent className="text-left normal-case flex flex-col gap-4 text-balance">
                      <p>
                        Everything starts with an intention: a line, a shape, a
                        function. We sketch, refine, and model each piece before
                        crafting a prototype. Once proportions, materials, and comfort
                        are validated, the final object moves into artisanal
                        production. Every step ensures a perfect balance between
                        aesthetics, utility, and long-lasting quality.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
      
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="uppercase">
                      04 — Refinement
                      Reducing the object to its essential expression.
                    </AccordionTrigger>
                    <AccordionContent className="text-left normal-case flex flex-col gap-4 text-balance">
                      <p>
                        Yes. Todana collaborates with architects, interior designers,
                        and private clients to design fully customized pieces:
                        dimensions, materials, colors, and configurations. Our custom
                        approach ensures each piece integrates seamlessly with its
                        environment.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
      
                  {/*<AccordionItem value="item-5">
                    <AccordionTrigger className="uppercase">
                      What are your production timelines?
                    </AccordionTrigger>
                    <AccordionContent className="text-left normal-case flex flex-col gap-4 text-balance">
                      <p>
                        Timelines vary depending on the complexity of the piece and
                        the selected materials. In general, production takes between 4
                        and 10 weeks. Custom or technically advanced creations may
                        require additional time to meet our quality standards.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
      
                  <AccordionItem value="item-6">
                    <AccordionTrigger className="uppercase">
                      Do you work on full interior projects?
                    </AccordionTrigger>
                    <AccordionContent className="text-left normal-case flex flex-col gap-4 text-balance">
                      <p>
                        Absolutely. We collaborate with architects and design studios
                        to shape complete spaces—from furniture selection to custom
                        storage and lighting solutions. Our mission is to bring a
                        strong, timeless identity to every interior.
                      </p>
                    </AccordionContent>
                  </AccordionItem>*/}
                </Accordion>
      
                {/* -- CTA -- */}
                <Button
                  variant={"secondary"}
                  className="slide-up mt-10 w-full"
                  aria-label="button discover the collection"
                >
                  Discover our collection
                </Button>
              </div>
            </section>
    </main>
  );
}

import { Button } from "@/components/ui/button";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Gallery() {
  const galleryRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".appear", {
      y: 80,
      opacity: 0.8,
      duration: 1,
      stagger: 0.2,

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
  }, {});

  return (
    <main
      ref={galleryRef}
      className="w-screen min-h-screen md:grid md:grid-cols-2 gap-10 place-content-center items-center px-10 pb-10 md:pb-0"
    >
      <div className="appear z-50">
        <div className="flex gap-3 items-center">
          <img
            className="rotation"
            src="/assets/icons/wheel_white.svg"
            alt="wheel icon"
            width={30}
            height={30}
          />
          <h1 className="text-5xl py-10">
            Discover our collection{" "}
            <span className="text-xs align-top">(01)</span>
          </h1>
        </div>
        <p className="pb-10">
          A curated selection of contemporary pieces. Explore our chairs, sofas,
          tables, lamps, and storage systems — each piece designed to balance
          precision and softness, structure and emotion.
        </p>
          <p className="">
            Shapes That Speak Our silhouettes draw from minimalism, modernism,
            and Japanese craftsmanship — reduced to the essential, so your space
            can breathe. Craft in Every Detail Natural woods, brushed metals,
            premium fabrics, and hand-finished textures. Every element is
            selected to age beautifully and live with you.
          </p>
        <div className="w-fit h-fit py-20">
          <img className="object-cover w-full h-fit" src="/assets/images/home/table.png" alt="gallery cover image" />
        </div>
        {/*<Carousel>
          <CarouselContent>
            <CarouselItem className="md:basis-1/2">
              <a href="/gallery">
                <img
                  className="w-fill transition duration-500 hover:blur-xs"
                  src="/assets/images/gallery/furnitures/alma_fond.jpg"
                  alt="furniture carousel image"
                />
              </a>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>*/}
      </div>
      <section className="appear  text-balance [&_p]:pb-10">
       
        <div >
          
          <Accordion
            type="single"
            collapsible
            className=" text-white w-full rounded-lg"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="uppercase">
                What kind of projects do you create?
              </AccordionTrigger>
              <AccordionContent className="text-left normal-case flex flex-col gap-4 text-balance">
                <p>
                  Todana designs contemporary, high-end furniture: chairs, armchairs,
                  sofas, tables, storage systems, and lighting pieces. We work on complete
                  collections as well as unique objects crafted to elevate residential,
                  commercial, and hospitality spaces.
                </p>
              </AccordionContent>
            </AccordionItem>
          
            <AccordionItem value="item-2">
              <AccordionTrigger className="uppercase">
                What are your areas of expertise?
              </AccordionTrigger>
              <AccordionContent className="text-left normal-case flex flex-col gap-4 text-balance">
                <p>
                  Our expertise lies in creating refined, architectural designs inspired
                  by Japanese aesthetics. We master the use of noble materials—solid wood,
                  brushed steel, premium fabrics—and craft pieces where technical precision
                  meets artisanal finesse. Proportions, textures, and longevity are central
                  to every design.
                </p>
              </AccordionContent>
            </AccordionItem>
          
            <AccordionItem value="item-3">
              <AccordionTrigger className="uppercase">
                How does the design process work?
              </AccordionTrigger>
              <AccordionContent className="text-left normal-case flex flex-col gap-4 text-balance">
                <p>
                  Everything starts with an intention: a line, a shape, a function. We
                  sketch, refine, and model each piece before crafting a prototype. Once
                  proportions, materials, and comfort are validated, the final object moves
                  into artisanal production. Every step ensures a perfect balance between
                  aesthetics, utility, and long-lasting quality.
                </p>
              </AccordionContent>
            </AccordionItem>
          
            <AccordionItem value="item-4">
              <AccordionTrigger className="uppercase">
                Do you offer custom-made furniture?
              </AccordionTrigger>
              <AccordionContent className="text-left normal-case flex flex-col gap-4 text-balance">
                <p>
                  Yes. Todana collaborates with architects, interior designers, and private
                  clients to design fully customized pieces: dimensions, materials, colors,
                  and configurations. Our custom approach ensures each piece integrates
                  seamlessly with its environment.
                </p>
              </AccordionContent>
            </AccordionItem>
          
            <AccordionItem value="item-5">
              <AccordionTrigger className="uppercase">
                What are your production timelines?
              </AccordionTrigger>
              <AccordionContent className="text-left normal-case flex flex-col gap-4 text-balance">
                <p>
                  Timelines vary depending on the complexity of the piece and the selected
                  materials. In general, production takes between 4 and 10 weeks. Custom or
                  technically advanced creations may require additional time to meet our
                  quality standards.
                </p>
              </AccordionContent>
            </AccordionItem>
          
            <AccordionItem value="item-6">
              <AccordionTrigger className="uppercase">
                Do you work on full interior projects?
              </AccordionTrigger>
              <AccordionContent className="text-left normal-case flex flex-col gap-4 text-balance">
                <p>
                  Absolutely. We collaborate with architects and design studios to shape
                  complete spaces—from furniture selection to custom storage and lighting
                  solutions. Our mission is to bring a strong, timeless identity to every
                  interior.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          {/* -- CTA -- */}
          <Button
            variant={"secondary"}
            className="mt-10 w-full"
            aria-label="button discover the collection"
          >
            Discover our collection
          </Button>
        </div>

      </section>
    </main>
  );
}

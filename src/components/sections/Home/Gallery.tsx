import { Button } from "@/components/ui/button";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from "embla-carousel-autoplay";

import { furnitures } from "@/data/furnitures";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";



export default function Gallery() {
  const galleryRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".appear", {
      y: 80,
      opacity: 0.8,
      duration: 1,
      stagger: 0.8,

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
      className="appear w-screen min-h-screen grid md:grid-cols-2 gap-10 place-content-center text-white items-center px-10 pb-10 md:pb-0"
    >
      <section className="appear z-50">
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
        <p className="pb-10">
          Each Todana collection explores a dialogue between form, material, and space.
          From seating to lighting, every piece is designed as part of a coherent system — modular, expressive, and built to last.
        </p>
        <p className="">
          Shapes That Speak Our silhouettes draw from minimalism, modernism, and
          Japanese craftsmanship — reduced to the essential, so your space can
          breathe. Craft in Every Detail Natural woods, brushed metals, premium
          fabrics, and hand-finished textures. Every element is selected to age
          beautifully and live with you.
        </p>
        {/* -- CTA -- */}
        <Button
          variant={"secondary"}
          className={'mt-10 w-full {}'}
          aria-label="button discover the collection"
        >
          Discover our collection
        </Button>
      </section>
      {/* -- Caroussel Item Sectoin -- */}
      <section className="appear py-20">
        <Carousel
          className={"hover:cursor-pointer active:cursor-grabbing"}
          plugins={[
            Autoplay({
              delay: 2500,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
        >
          <CarouselContent>
            {furnitures.map((item, i) => (
              <CarouselItem
                key={i}
                className="cursor-grab relative md:basis-1/2 group"
              >
                <img
                  className="h-screen w-fill object-cover transition-all duration-500 group-hover:p-5"
                  src={item.image}
                  alt="/"
                  width={2000}
                  height={2000}
                  loading="lazy"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
    </main>
  );
}

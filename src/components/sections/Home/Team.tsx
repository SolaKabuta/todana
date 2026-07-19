import TeamCard from "@/components/team/TeamCard";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Autoplay from "embla-carousel-autoplay"
import { teamMembers } from "@/data/team"
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);


import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".appear", {
        y: 60,
        rotation: 3,
        duration: 0.8,

        scrollTrigger: {
          trigger: ".appear",
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
    },
    { scope: containerRef },
  );

  return (
    <main
      ref={containerRef}
      id="team"
      className="relative bg-accent w-screen min-h-screen grid place-content-center p-10 pb-40"
    >
      {/* -- Desktop Version Start -- */}

      <section className="appear">
        <div className="flex justify-center items-center gap-3 text-primary pb-5">
          <Image
            className="rotation"
            src="/assets/icons/wheel.svg"
            alt=""
            width={30}
            height={30}
          />
          <h1 className="text-5xl">
            Our team<span className="text-xs align-top">(04)</span>
          </h1>
        </div>
        <div className="text-center pb-10">
          <p>The team crafting your experience.</p>
          <p>
            We combine creativity and technical expertise to bring your vision
            to life.
          </p>
        </div>
        <div className="hidden md:block scale-90">
          <TeamCard />
        </div>
      </section>

      {/* -- Desktop Version End -- */}

      {/* -- Mobile Version Start -- */}

      <section className="py-20 block md:hidden text-white">
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
            {teamMembers.map((item, i) => (
              <CarouselItem
                key={i}
                className="w-10 cursor-grab relative group"
              >
                <div className="bg-primary p-5 rounded-lg group">
                  <div className="rounded-lg ">
                    <Image
                      className="object-cover rounded-lg pb-5 grayscale transition-all duration-500 group-hover:p-1 hover:grayscale-0"
                      src={item.photo}
                      alt={item.alt}
                      width={500}
                      height={500}
                      loading="lazy"
                    />
                  </div>
                  <p className="uppercase">{item.name}</p>
                  <div className="flex gap-3 items-center">
                    <Image className="rotation" src={item.icon} alt="wheel icon" width={30} height={30} />
                    <p className="uppercase font-black py-3">{item.role}</p>
                  </div>
                  <p>{item.bio}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      {/* -- Mobile Version End -- */}

    </main>
  );
}

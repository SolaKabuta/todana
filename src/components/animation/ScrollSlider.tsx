import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { slides } from "../../data/slides";

gsap.registerPlugin(ScrollTrigger);

export const ScrollSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const indicesRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    // Indices setup
    if (indicesRef.current) {
      indicesRef.current.innerHTML = "";
      slides.forEach((_, index) => {
        const indexNum = (index + 1).toString().padStart(2, "0");
        const indicator = document.createElement("p");
        indicator.dataset.index = index.toString();
        indicator.className = "flex items-center gap-4 text-white";
        indicator.innerHTML = `
          <span class="marker block w-3 h-px bg-white" style="transform: scaleX(${index === 0 ? 1 : 0});"></span>
          <span class="index w-5 flex justify-end" style="opacity: ${index === 0 ? 1 : 0.35};">${indexNum}</span>
        `;
        (indicesRef.current as HTMLDivElement).appendChild(indicator);
      });
    }

    // GSAP ScrollTrigger
    const pinDistance = window.innerHeight * slides.length;
    ScrollTrigger.create({
      trigger: sliderRef.current,
      start: "top top",
      end: `+=${pinDistance}px`,
      scrub: 1,
      pin: true,
      pinSpacing: true,
      onUpdate: (self) => {
        if (progressRef.current) {
          gsap.set(progressRef.current, {
            scaleY: self.progress,
          });
        }
        const currentSlide = Math.floor(self.progress * slides.length);
        if (activeSlide !== currentSlide && currentSlide < slides.length) {
          setActiveSlide(currentSlide);
        }
      },
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
    // eslint-disable-next-line
  }, []);

  // Slide image animation
  useEffect(() => {
    if (imagesRef.current) {
      imagesRef.current.innerHTML = "";
      const img = document.createElement("img");
      img.src = slides[activeSlide].image;
      img.alt = `Slide ${activeSlide + 1}`;
      img.className = "absolute w-full h-full object-cover origin-center";
      imagesRef.current.appendChild(img);
      gsap.fromTo(
        img,
        { opacity: 0, scale: 1.1 },
        { opacity: 1, scale: 1, duration: 1, ease: "power2.out" },
      );
    }
    // Indicator animation
    if (indicesRef.current) {
      Array.from(indicesRef.current.children).forEach((indicator, i) => {
        const marker = indicator.querySelector(".marker") as HTMLElement;
        const indexEl = indicator.querySelector(".index") as HTMLElement;
        gsap.to(indexEl, {
          opacity: i === activeSlide ? 1 : 0.5,
          duration: 0.3,
        });
        gsap.to(marker, {
          scaleX: i === activeSlide ? 1 : 0,
          duration: 0.3,
        });
      });
    }
    // Title animation
    if (titleRef.current) {
      const h1 = document.createElement("h1");
      h1.className = "text-2xl md:text-3xl lg:text-5xl font-bold";
      titleRef.current.innerHTML = "";
      titleRef.current.appendChild(h1);

      const text = slides[activeSlide].title;
      const chars = text.split("").map((char) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.display = "inline";
        h1.appendChild(span);
        return span;
      });

      gsap.fromTo(
        chars,
        { yPercent: 100, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.3,
          ease: "power3.out",
          stagger: 0.015,
        },
      );
    }
  }, [activeSlide]);

  return (
    <section
      ref={sliderRef}
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      <div
        ref={imagesRef}
        className="slider-images absolute w-full h-full brightness-50"
      />
      <div
        ref={titleRef}
        className="slider-title absolute top-1/2 left-8 -translate-y-1/2 w-1/2 text-white"
      />
      <div className="slider-indicator absolute top-1/2 right-8 -translate-y-1/2">
        <div
          ref={indicesRef}
          className="slider-indices flex flex-col gap-4 p-4 pr-5"
        />
        <div className="slider-progress-bar absolute top-0 right-0 w-px h-full bg-white/35">
          <div
            ref={progressRef}
            className="slider-progress absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-full bg-white origin-top"
            style={{ transform: "translateX(-50%) scaleY(0)" }}
          />
        </div>
      </div>
    </section>
  );
};

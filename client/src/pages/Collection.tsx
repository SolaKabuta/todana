import { furnitures } from "@/data/furnitures"; 
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";


// interface ComponentNameProps {
//   propName: type;
// }


export default function Collection() {
  
  const containerRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    gsap.from("scroll", {});
  });
  
  return (
    <main ref={containerRef} className="h-screen w-screen text-white grid grid-rows-2 place-content-center items-center">
      {/* -- Title/Texts Section -- */}
      <section>
        <div className="flex gap-3 items-center">
          <img
            className="rotation"
            src="/assets/icons/wheel_white.svg"
            alt="wheel icon"
            width={30}
            height={30}
          />
          <h1 className="text-5xl uppercase py-10">
            Collection <span className="text-xs align-top">(01)</span>
          </h1>
        </div>
        <div>
          <p>
            Each Todana collection explores a dialogue between form, material,
            and space. From seating to lighting, every piece is <br />
            designed as part of a coherent system — modular, expressive, and
            built to last.
          </p>
        </div>
      </section>
      {/* -- Furniture Collection Section -- */}
      <section className="grid grid-cols-7 gap-3">
        {furnitures.map((index, item) => (
         <ul key={index}>
            <li>{item.image}</li>
            <div className="bg-red-600 h-10 w-10"></div>
         </ul> 
        ))}
      </section>
    </main>
  );
}

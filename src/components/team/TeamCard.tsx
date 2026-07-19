import { useRef } from "react";
import { teamMembers } from "@/data/team";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);
// interface TeamCardProps {
//   propName: type;
// }

export default function TeamCard() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(".rotation", {
        rotation: 360,
        duration: 6,
        repeat: -2,
      });
    },
    { scope: containerRef },
  );

  return (
    <main ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-white">
      {teamMembers.map((item, index) => (
        <div key={index} className=" bg-primary p-5 rounded-lg group">
          <div className=" w-fit h-fit rounded-lg ">
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
      ))}
    </main>
  );
}

import { useRef } from "react";
import { teamMembers } from "@/data/team";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    <main className="grid md:grid-cols-4 gap-5 text-white">
      {teamMembers.map((item) => (
        <div className="bg-primary p-5 rounded-lg">
          <div className="w-fit h-fit rounded-lg">
            <img
              className="object-cover rounded-lg pb-5 grayscale transition duration-500 hover:scale-95 hover:grayscale-0"
              src={item.photo}
              alt=""
            />
          </div>
          <p className="uppercase">{item.name}</p>
          <div className="flex gap-3 items-center">
            <img className="rotation" src={item.icon} alt="wheel icon" width={30} height={30} />
            <p className="uppercase font-black py-3">{item.role}</p>
          </div>
          <p>{item.bio}</p>
        </div>
      ))}
    </main>
  );
}

import GlassScene from "@/components/SplineScenes/GlassScene";
import LiquidScene from "@/components/SplineScenes/LiquidScene";
import TextureScene from "@/components/SplineScenes/TextureScene";
import TitaniumScene from "@/components/SplineScenes/TitaniumScene";

// interface SplineCardProps {
//   propName: string;
// }
const scenes = [
  {
    label: <LiquidScene />,
    title: "Fabric",
    text: "Collaborative project to build a modern furniture website with smooth animations and a consistent UI system. This README explains the tech stack, project structure, setup, workflow, and good practices for our team.",
  },
  {
    label: <GlassScene />,
    title: "Glass",
    text: "Collaborative project to build a modern furniture website with smooth animations and a consistent UI system. This README explains the tech stack, project structure, setup, workflow, and good practices for our team.",
  },
  {
    label: <TextureScene />,
    title: "Texture",
    text: "Collaborative project to build a modern furniture website with smooth animations and a consistent UI system. This README explains the tech stack, project structure, setup, workflow, and good practices for our team.",
  },
  {
    label: <TitaniumScene />,
    title: "Metal",
    text: "Collaborative project to build a modern furniture website with smooth animations and a consistent UI system. This README explains the tech stack, project structure, setup, workflow, and good practices for our team.",
  },
];

export default function SplineCard() {
  return (
    <>
      <section className="slide grid grid-cols-2 gap-6">
      {/* -- Spline Scene -- */}
      {scenes.map((scene, index) => (
        <div key={index} className="relative flex flex-col gap-5 border border-white rounded-2xl p-2 transition-all duration-300 hover:bg-secondary group">
          <div className=" rounded-2xl">
            <ul>
              <li>{scene.label}</li>
              {/* -- Texts -- */}
              <section className="px-2 pb-7">
                <div className="flex gap-3 ">
                  <img
                    className="rotation"
                    src="/assets/icons/wheel_white.svg"
                    alt="wheel icon"
                    width={20}
                    height={20}
                  />
                  <p className="font-black py-5">{scene.title}</p>
                </div>
                <p>{scene.text}</p>
              </section>
            </ul>
          </div>
        </div>
      ))}
      </section>
    </>
  );
}

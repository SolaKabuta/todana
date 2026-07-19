import dynamic from "next/dynamic";
import Image from "next/image";

const Placeholder = () => (
  <div className="h-52 w-full bg-white/5 animate-pulse rounded-2xl" />
);

const LiquidScene   = dynamic(() => import("@/components/SplineScenes/LiquidScene"),   { ssr: false, loading: Placeholder });
const GlassScene    = dynamic(() => import("@/components/SplineScenes/GlassScene"),    { ssr: false, loading: Placeholder });
const TextureScene  = dynamic(() => import("@/components/SplineScenes/TextureScene"),  { ssr: false, loading: Placeholder });
const TitaniumScene = dynamic(() => import("@/components/SplineScenes/TitaniumScene"), { ssr: false, loading: Placeholder });

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
                    <Image
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

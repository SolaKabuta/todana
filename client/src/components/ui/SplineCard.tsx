import SplineScene from "@/components/SplineScenes/SplineScene";

// interface SplineCardProps {
//   propName: string;
// }
const scenes = [
  {
    label: <SplineScene />,
    title: "Metals",
    text: "Collaborative project to build a modern furniture website with smooth animations and a consistent UI system. This README explains the tech stack, project structure, setup, workflow, and good practices for our team.",
  },
  {
    label: <SplineScene />,
    title: "Metals",
    text: "Collaborative project to build a modern furniture website with smooth animations and a consistent UI system. This README explains the tech stack, project structure, setup, workflow, and good practices for our team.",
  },
  {
    label: <SplineScene />,
    title: "Metals",
    text: "Collaborative project to build a modern furniture website with smooth animations and a consistent UI system. This README explains the tech stack, project structure, setup, workflow, and good practices for our team.",
  },
  {
    label: <SplineScene />,
    title: "Metals",
    text: "Collaborative project to build a modern furniture website with smooth animations and a consistent UI system. This README explains the tech stack, project structure, setup, workflow, and good practices for our team.",
  },
];

export default function SplineCard() {
  return (
    <>
      <section className="grid grid-cols-2 gap-3">
      {/* -- Spline Scene -- */}
      {scenes.map((scene, index) => (
        <div key={index} className="relative flex flex-col gap-5 border border-white rounded-2xl p-2">
          <div className=" rounded-2xl">
            <ul>
              <li>{scene.label}</li>
              {/* -- Texts -- */}
              <div className="px-2 pb-7">
                <p className="font-black py-5">{scene.title}</p>
                <p>{scene.text}</p>
              </div>
            </ul>
          </div>
        </div>
      ))}
      </section>
    </>
  );
}

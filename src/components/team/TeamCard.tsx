import { teamMembers } from "@/data/team";
// interface TeamCardProps {
//   propName: type;
// }

export default function TeamCard() {
  return (
    <main className="grid md:grid-cols-4 gap-5 text-white">
      {teamMembers.map((item) => (
        <div className="bg-primary p-5 rounded-lg">
          <div className="w-fit h-fit rounded-lg">
          <img className="object-cover rounded-lg pb-5 grayscale transition duration-500 hover:scale-95 hover:grayscale-0" src={item.photo} alt="" />
          </div>
          <p className="uppercase">{item.name}</p>
          <p className="uppercase font-black py-3">{item.role}</p>
          <p>{item.bio}</p>
        </div>
      ))}
    </main>
  );
}

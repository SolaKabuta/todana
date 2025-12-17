import { testimonials } from "@/data/testimonials";

// interface ComponentNameProps {
//   propName: type;
// }

export default function TestimonalCard() {
  return (
      <div className="grid grid-cols-2 gap-5 pb-3">
        {testimonials.map((item, index) => (
          <ul className="bg-white text-primary border border-white rounded-2xl mb-3 p-5" key={index}>
            <li className="font-medium pb-10">{item.feedback}</li>
            <section className="flex gap-3 items-center">
              <img className="rotation" src={item.icon} alt="todana icon" width={30} height={30} />
              <div>
                <p className="font-black">{item.name}</p>
                <p>{item.role}</p>
              </div>
            </section>
          </ul>
        ))}
      </div> 
  );
}
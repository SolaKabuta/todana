import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);
// interface Testimonials {
//   propName: type;
// }

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from("scroll", {});
  });

  return (
    <main
      ref={containerRef}
      className="min-h-screen w-screen bg-primary text-white p-10"
    >
      {/* -- Title Section -- */}
      <div className="flex justify-center gap-3 items-center">
        <img
          className="rotation"
          src="/assets/icons/wheel_white.svg"
          alt="wheel icon"
          width={30}
          height={30}
        />
        <h1 className="text-5xl py-10">
          Contact
          <span className="text-xs align-top">(08)</span>
        </h1>
      </div>
      {/* -- Contact Form Section -- */}
      <section className="grid md:grid-cols-2 gap-10">
        {/* -- Banner Image -- */}
       <div className="hidden md:block">
         <img className="object-cover h-full w-full rounded-2xl" src="/assets/images/contact/sofa.png" alt="" />
       </div> 
       {/* -- Form -- */}
       <form action="" className="bg-accent text-primary rounded-2xl flex flex-col gap-1 p-10 [&_input]:bg-white [&_input]:rounded-lg">
         <div className="pb-10">
         <p className="text-3xl pb-10">Let's have a chat</p>
         {/* -- Divider -- */}
         <div className="bg-primary/10 h-0.5 w-full "></div>
         </div>
         <input className="p-5" type="text" placeholder="What's your question"/>
         <input className="p-5" type="email" placeholder="Email *"/>
         <input className="px-5 py-40 mb-5" type="textarea" placeholder="Describe your project, we'll bring it to life"/>
         <Button >Submit </Button>
       </form>
      </section>
      {/* -- MAP Section API ? -- */}
      <section>
        <div className="bg-accent"></div>
      </section>
    </main>
  );
}

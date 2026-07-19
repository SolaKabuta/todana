import TestimonalCard from "@/components/layout/TestimonialCard";
import Image from "next/image";

export default function Testimonials() {

  return (
    <main className="min-h-screen w-screen bg-primary text-white p-10">
      {/* -- Title -- */}
      <section className="flex gap-3 items-center">
        <Image
          className="rotation"
          src="/assets/icons/wheel_white.svg"
          alt="wheel icon"
          width={30}
          height={30}
        />
        <h1 className="text-5xl py-10">
          Testimonials
          <span className="text-xs align-top">(07)</span>
        </h1>
      </section>
      <div className="">
        {/*<p className="pb-5">Results that speaks volume</p>*/}
        <p>
          Don't just take our words for it! Hear from our satisfied clients{" "}
          <br /> who have transformed their ideas through our craft.
        </p>
      </div>
      {/* -- Testimonials Section -- */}
      <section className="pt-10">
        <TestimonalCard />
      </section>
    </main>
  );
}

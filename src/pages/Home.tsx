import Hero from "@/components/sections/Home/Hero";
import Gallery from "@/components/sections/Home/Gallery";
import Story from "@/components/sections/Home/Story";
import Team from "@/components/sections/Home/Team"
import Testimonials from "@/components/sections/Home/Testimonials";
import MaterialsAndCraft from "@/components/sections/Home/MaterialsAndCraft";
import DesignProcess from "@/components/sections/Home/DesignProcess";
import Values from "@/components/sections/Home/Values";
import Contact from "@/components/sections/Home/Contact";
export default function Home() {
  return (
    <>
      <Hero/>
      <Gallery/>
      <MaterialsAndCraft/>
      <DesignProcess/>
      <Team/>
      <Story/>
      <Values/>
      <Testimonials/>
      <Contact/>
    </>
  );
}

import Hero from "@/components/sections/Home/Hero";
import Gallery from "@/components/sections/Home/Gallery";
import About from "@/components/sections/Home/About";
import Team from "@/components/sections/Home/Team"
import Testimonials from "@/components/sections/Home/Testimonials";
export default function Home() {
  return (
    <>
      <Hero/>
      <Gallery/>
      <About/>
      <Team/>
      <Testimonials/>
    </>
  );
}

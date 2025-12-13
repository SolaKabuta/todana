import { menuItems, contactMenuItems, socialMenuItems } from "@/data/menu";
import { Button } from "../ui/button";
import { useRef } from "react";
import gsap from "gsap"
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  // const [isOpen, setIsOpen] = useState<boolean>(false);

  const footerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".show", {
      x: 100,
      duration: 5,
      stagger: 1,
      ease: "back.out(1.7)",
      
      scrollTrigger: {
        trigger: ".show",
        start: "top 140%",
        scrub: 1,
        toggleActions: "play none none reverse"
      }
    });
    
  }, {});

  return (
    <footer
      ref={footerRef}
      className="relative w-screen bg-secondary text-white p-10"
    >
      <section className="show flex gap-3 items-center justify-center border border-spacing-4 p-10">
        <div className="text-center">
          <p className="text-3xl md:text-5xl 2xl:text-mega uppercase font-black">
            戸棚 Todana
          </p>
          {/*<p className="pb-5">Since 1834</p>*/}
        </div>
        <img
          className="size-10 2xl:size-fit"
          src="/assets/logo/logo_white.svg"
          alt="Todana design logo"
        />
      </section>
      {/* -- Menu container -- */}
      <section className="show grid lg:grid-cols-4 gap-3">
        <div className="border border-spacing-4 mt-3 p-10">
          <p className="py-3 uppercase">Menu :</p>
          {menuItems.map((item, index) => (
            <ul key={index}>
              <li className="w-fit transition duration-300 hover:text-primary">
                <a href={item.path}>{item.label}<span className="ml-2 text-xs float-end">{item.id}</span></a>
              </li>
            </ul>
          ))}
        </div>
        {/* -- Contact container -- */}
        <div className="border border-spacing-4  mt-3 p-10">
          <p className="py-3 uppercase">Contact :</p>
          {contactMenuItems.map((item, index) => (
            <ul key={index}>
              <li className="w-fit transition duration-300 hover:text-primary">
                <a href={item.path} target="_blank">{item.label}</a>
              </li>
            </ul>
          ))}
        </div>
        {/* -- Newsletter input container -- */}
        <div className="md:col-span-2 border border-spacing-4 md:mt-3 p-10">
          <p className="py-3 uppercase">Subscribe :</p>
          <p className="pb-3">
            Join our newsletter to stay up to date on features and realeases
          </p>
          <div className="relative flex flex-col lg:flex-row items-center">
            <input
              className="bg-amber-200 text-primary lg:rounded-md w-full h-15 px-5 placeholder-primary"
              type="text"
              placeholder="Enter your email"
            />
            <Button className="lg:absolute right-0 w-full lg:w-fit h-15 rounded-r-md">Subscribe</Button>
          </div>
        </div>
      </section>
      {/* -- Socials -- */}
      <section className="show flex flex-col lg:flex-row md:justify-around gap-3 pt-3">
        {socialMenuItems.map((item, index) => (
          <ul className="w-full" key={index}>
            <li className="px-10 py-15 border border-spacing-4 uppercase transition duration-300 hover:text-white hover:bg-primary hover:translate-x-2 group">
              <div className="flex">
                <a className="transition duration-300 group-hover:-translate-x-4" href={item.path}>{item.label}</a>
              <svg className="transition duration-500 group-hover:rotate-45 group-hover:translate-x-2" width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                  />
              </svg>
              </div>
            </li>
          </ul>
        ))}
      </section>
      {/* -- Legal Mentions -- */}
      <section className="show grid lg:grid-cols-3 items-center py-3">
        <p>2025 Todana. All right reserved.</p>
        <div>
         <ul className="flex lg:justify-center gap-3 [&_li]:underline">
           <li><a href="/">Privacy Policy</a></li>
           <li><a href="/">Terms of Services</a></li>
         </ul> 
        </div>
        <p className="lg:text-right">Design and developed by <span className="text-primary"><a href="https://solakabuta.com">Sola Kabuta</a></span></p>
      </section>
    </footer>
  );
}

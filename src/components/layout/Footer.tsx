import { Button } from "../ui/button";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { menuItems } from "@/data/menu";

export default function Footer() {
  // const [isOpen, setIsOpen] = useState<boolean>(false);

  const footerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // gsap.from ("#navbar-overlay", {
      //   y: 100,
      // })
    },
    { scope: footerRef },
  );

  return (
    <footer
      ref={footerRef}
      className="relative w-screen bg-secondary text-white p-10"
    >
      <section className="flex gap-3 items-center justify-center border border-spacing-4 p-10">
        <div className="text-center">
          <p className="text-3xl md:text-5xl xl:text-mega uppercase font-black">
            戸棚 Todana
          </p>
          {/*<p className="pb-5">Since 1834</p>*/}
        </div>
        <img className="size-10 lg:size-fit" src="/assets/logo/logo_white.svg" alt="Todana design logo" />
      </section>
      {/* -- Menu container -- */}
      <section className="grid md:grid-cols-2 gap-3">
        <div className="border border-spacing-4 mt-3 p-10">
          <p className="py-3 uppercase">Menu :</p>
          {menuItems.map((item, index) => (
            <ul key={index}>
              <li className=" transition duration-300 hover:text-primary">
                <a href={item.path}>{item.label}</a>
              </li>
            </ul>
          ))}
        </div>
        {/* -- Newsletter input container -- */}
        <div className="border border-spacing-4 md:mt-3 p-10">
          <p className="py-3 uppercase">Subscribe :</p>
          <p className="pb-3">
            Join our newsletter to stay up to date on features and realeases
          </p>
          <div className="flex items-center">
            <input
              className="bg-amber-200 rounded-l-md w-full h-15 px-5 placeholder-primary"
              type="text"
              placeholder="Enter your email"
            />
            <Button className="h-15 rounded-r-md">Subscribe</Button>
          </div>
        </div>
      </section>
    </footer>
  );
}

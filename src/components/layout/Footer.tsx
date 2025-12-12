import { menuItems } from "@/data/menu";
import SlideUpLink from "../animation/SlideUpLink";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white min-h-full w-screen flex flex-col">
      <div className="flex flex-col justify-center items-center py-25 gap-5">
        <img
          className="md:w-15 xl:w-20"
          src="/assets/logo/logo_primary.svg"
          alt="todana logo"
          width={5}
          height={5}
        />
        <p className="w-75 text-[24px] font-medium text-center">
          Designing spaces that inspire, one detail at a time.
        </p>
      </div>
      <div className="w-[80%] mx-auto flex-1">
        <hr className="w-full mb-10" />
        <div className="flex flex-col gap-10 min-[1371px]:flex-row min-[1371px]:gap-40 mb-20">
          {/* Contact */}
          <div className="flex flex-col gap-3 mr-20">
            <p className="font-medium">Contact</p>
            <div className="flex flex-col gap-5">
              <SlideUpLink
                href=""
                className="text-xl font-bold hover:text-primary"
              >
                Downtown Tokyo, Japan
              </SlideUpLink>
              <div className="flex flex-col gap-2">
                <SlideUpLink
                  href="mailto:tadana@example.com"
                  className="text-[16px] font-medium hover:text-primary"
                >
                  tadana@example.com
                </SlideUpLink>
                <SlideUpLink
                  href="tel:+81312347895"
                  className="font-medium hover:text-primary"
                >
                  +81 312.34.7895
                </SlideUpLink>
              </div>
            </div>
          </div>
          {/* Site Map */}
          <div className="flex flex-col gap-3">
            <p className="font-medium">Site Map</p>
            <div className="flex flex-col gap-2">
              {menuItems.map((item, index) => (
                <ul className="relative group" key={index}>
                  <li className="text-2xl font-bold hover:text-primary">
                    <SlideUpLink href={item.path}>{item.label}</SlideUpLink>
                  </li>
                </ul>
              ))}
            </div>
          </div>
          {/* Social */}
          <div className="flex flex-col gap-3">
            <p className="font-medium">Social</p>
            <div className="flex flex-col gap-2">
              <SlideUpLink
                href="https://twitter.com"
                className="text-2xl font-bold hover:text-primary"
              >
                Twitter
              </SlideUpLink>
              <SlideUpLink
                href="https://facebook.com"
                className="text-2xl font-bold hover:text-primary"
              >
                Facebook
              </SlideUpLink>
              <SlideUpLink
                href="https://instagram.com"
                className="text-2xl font-bold hover:text-primary"
              >
                Instagram
              </SlideUpLink>
            </div>
          </div>
          {/* Newsletter */}
          <div className="flex flex-col gap-3">
            <p className="font-medium">Newsletter</p>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Email Address"
                className="border-b bg-transparent text-white placeholder:text-gray-300"
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="flex flex-col lg:flex-row md:flex-row justify-between py-5">
          <div className="flex flex-col lg:flex-row md:flex-row gap-5 text-[18px]">
            <SlideUpLink href="">Privacy Policy</SlideUpLink>
            <SlideUpLink href="">Terms of Service</SlideUpLink>
            <SlideUpLink href="">Disclaimer</SlideUpLink>
          </div>
          <div className="flex gap-5">
            <p>Disclaimer Design & Developed by Reda, Samuel, Sola, Mykyta</p>
          </div>
        </div>
        <hr />
      </div>
      <div className="text-center  font-bold leading-[0.8] overflow-hidden w-[80%] mx-auto">
        <h3 className="text-[clamp(2rem,19vw,800px)] max-w-full whitespace-nowrap overflow-hidden">
          TODANA
        </h3>
      </div>
    </footer>
  );
}

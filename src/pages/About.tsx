import { ScrollSlider } from "../components/animation/ScrollSlider";

export default function About() {
  return (
    <div>
      <section className="relative w-screen h-screen grid place-content-center">
        <div>
          <h1 className="text-5xl md:text-7xl xl:text-9xl uppercase font-black">
            About us
          </h1>

          <p>私たちについて </p>
        </div>

        <div className="">
          {/*svg arrow*/}
          <a
            href="#scroll"
            className="absolute bottom-10 left-[50%] animate-bounce"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-chevrons-down-icon lucide-chevrons-down"
            >
              <path d="m7 6 5 5 5-5" />
              <path d="m7 13 5 5 5-5" />
            </svg>
          </a>
        </div>
      </section>
      <div id="scroll">
        <ScrollSlider />
      </div>
    </div>
  );
}

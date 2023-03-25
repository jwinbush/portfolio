import { Link } from "react-router-dom";
import bubble from "../assets/videos/waves.mp4";
// import html from "../assets/images/skills/html.svg";
// import css from "../assets/images/skills/css.svg";
// import javascript from "../assets/images/skills/javascript.svg";

import { FaArrowDown } from "react-icons/fa";
import { Video } from "../components/video/Video";

export default function About() {
  return (
    <div className="bg-black pt-32 ">
      <h1
        className="mb-4 text-4xl text-center font-extrabold lg:text-7xl bg-gradient-to-r bg-clip-text text-transparent 
        from-cyan-400 via-emerald-300 to-cyan-400
        animate-text"
      >
        More about me.
      </h1>
      {/* HERO SECTION */}
      <section
        className="bg-black w-full h-screen bg-top bg-cover duration-75"
        style={{
          backgroundImage:
            "url('https://images.wallpapersden.com/image/download/black-minimalist-hex_bW1paWiUmZqaraWkpJRmbmdlrWZlbWU.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          // backgroundAttachment:'fixed'
        }}
      >
        <div className="grid max-w-full px-4 pt-8 mx-auto lg:gap-8 xl:gap-0 lg:pt-8 lg:grid-cols-12">
          <div
            className="lg:col-span-5 max-w-[700px] mr-6 rounded lg:hidden"
            data-te-ripple-init
          >
            <Video
              src={bubble}
              id="myVideo1"
              muted={true}
              autoplay={true}
              loop={true}
            />
          </div>
          <div className="mr-auto place-self-center lg:col-span-7 lg:pl-10">
            <p className="flex max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-2xl dark:text-gray-400">
              A versatile Software Developer with years of experience in
              programming, UX/UI design, and data analytics. A well-organized
              person, problem solver, and independent employee with high
              attention to detail. I'm someone who loves to take on new
              challenges. In my free time I enjoy playing the piano, drawing,
              exercising, and getting out of my comfort zone.
            </p>

            <Link
              to="/about"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center rounded-md text-black bg-gradient-to-br from-cyan-400 via-emerald-300 to-cyan-400 hover:bg-gradient-to-br shadow-xl shadow-cyan-400/50 animate-text"
            >
              Skills
              <FaArrowDown className="ml-2" />
            </Link>
          </div>
          <div
            className="lg:col-span-5 max-w-[700px] mr-6 rounded hidden lg:flex"
            data-te-ripple-init
          >
            <Video
              src={bubble}
              id="myVideo1"
              muted={true}
              autoplay={true}
              loop={true}
            />
          </div>
        </div>
      </section>
      <section className="pb-6 text-center">
        <h2
          className=" font-extrabold lg:text-6xl bg-gradient-to-r bg-clip-text text-transparent 
        from-cyan-400 via-emerald-300 to-cyan-400
        animate-text pb-4"
        >
          Professional Skillset
        </h2>
        <div className="grid lg:grid-cols-2 px-2 gap-2 text-center text-white">
          <div className="p-4 rounded-md shadow-xl shadow-gray-900/70">
            <h1 className="font-bold text-2xl">Languages</h1>
            <p>.</p>
          </div>
          <div className="p-4 rounded-md shadow-xl shadow-gray-900/70">
          <h1 className="font-bold text-2xl">Tools</h1>
            <p>.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

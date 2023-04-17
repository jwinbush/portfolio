import bubble from "../assets/videos/bubble.mp4";
import { Tooltip } from "@material-tailwind/react";
import { motion as m } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
import { FaArrowDown } from "react-icons/fa";
import { Video } from "../components/video/Video";

// Behavior: smooth keeps it smooth!
const scrollToBottom = () => {
  window.scrollTo({
    top: 1000,
    behavior: "smooth",
  });
};

export default function About() {
  const tools = [
    { id: 1, content: "VS Code", name: "devicon-vscode-plain" },
    { id: 2, content: "Visual Studio", name: "devicon-visualstudio-plain" },
    { id: 3, content: "PhpStorm", name: "devicon-phpstorm-plain" },
    { id: 4, content: "Apache", name: "devicon-apache-plain" },
    {
      id: 5,
      content: "Adobe After Effects",
      name: "devicon-aftereffects-plain",
    },
    { id: 6, content: "Adobe Illustrator", name: "devicon-illustrator-plain" },
  ];
  return (
    <div className="bg-black pt-32 ">
      <h1
        className="mb-4 text-4xl text-center font-extrabold lg:text-7xl bg-gradient-to-r bg-clip-text text-transparent 
        from-cyan-400 via-emerald-300 to-cyan-400
        animate-text"
      >
        Get to know me.
      </h1>
      {/* HERO SECTION */}
      <m.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="bg-black w-full h-screen bg-top bg-cover duration-75"
      >
        <div className="grid max-w-full px-4 pt-8 mx-auto lg:gap-8 xl:gap-0 lg:pt-8 lg:grid-cols-12">
          <m.div
            variants={slideIn("right", "tween", 0.2, 1)}
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
          </m.div>
          <div className="mr-auto place-self-center lg:col-span-7 lg:pl-10">
            <m.p
              variants={textVariant(0.6)}
              className="flex max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-2xl dark:text-gray-400"
            >
              A versatile Software Developer with years of experience in
              programming, UX/UI design, and data analytics. A well-organized
              person, problem solver, and independent employee with high
              attention to detail. I'm someone who loves to take on new
              challenges. In my free time I enjoy playing the piano, using Adobe
              After Effects, exercising, and getting out of my comfort zone.
            </m.p>

            <button
              onClick={scrollToBottom}
              id="skills"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center rounded-md text-black bg-gradient-to-br from-cyan-400 via-emerald-300 to-cyan-400 hover:bg-gradient-to-br shadow-xl shadow-cyan-400/50 animate-text"
            >
              Skills
              <FaArrowDown className="ml-2" />
            </button>
          </div>
          <m.div
            variants={slideIn("right", "tween", 0.2, 1)}
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
          </m.div>
        </div>
      </m.section>
      <section className="pb-6 text-center h-screen grid lg:grid-cols-2">
        <div>
          <h2
            className=" font-extrabold text-2xl lg:text-5xl bg-gradient-to-r bg-clip-text text-transparent 
        from-cyan-400 via-emerald-300 to-cyan-400
        animate-text pb-4"
          >
            Professional Skillset
          </h2>
          <div className="flex justify-center px-2 gap-2 text-center text-white pb-8">
            <div className="p-4 rounded-md shadow-xl shadow-gray-900/70">
              <div
                id="languages"
                className="grid grid-cols-4 lg:gap-10 gap-6 lg:text-9xl text-7xl"
              >
                <Tooltip
                  content="HTML5"
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
                  <i className="devicon-html5-plain"></i>
                </Tooltip>

                <Tooltip
                  content="CSS3"
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
                  <i className="devicon-css3-plain"></i>
                </Tooltip>

                <Tooltip
                  content="TailwindCSS"
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
                  <i className="devicon-tailwindcss-plain"></i>
                </Tooltip>

                <Tooltip
                  content="JavaScript"
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
                  <i className="devicon-javascript-plain"></i>
                </Tooltip>

                <Tooltip
                  content="React"
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
                  <i className="devicon-react-plain"></i>
                </Tooltip>

                <Tooltip
                  content="TypeScript"
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
                  <i className="devicon-typescript-plain"></i>
                </Tooltip>

                <Tooltip
                  content="PHP"
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
                  <i className="devicon-php-plain"></i>
                </Tooltip>

                <Tooltip
                  content="C#"
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
                  <i className="devicon-csharp-plain"></i>
                </Tooltip>

                <Tooltip
                  content="Java"
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
                  <i className="devicon-java-plain"></i>
                </Tooltip>

                <Tooltip
                  content="MySQL"
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
                  <i className="devicon-mysql-plain"></i>
                </Tooltip>
                <Tooltip
                  content="Python"
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
                  <i className="devicon-python-plain"></i>
                </Tooltip>
                <Tooltip
                  content="R"
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
                  <i className="devicon-r-plain"></i>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2
            className=" font-extrabold text-2xl lg:text-5xl bg-gradient-to-r bg-clip-text text-transparent 
        from-cyan-400 via-emerald-300 to-cyan-400
        animate-text pb-4"
          >
            Tools & Apps
          </h2>
          <div className="flex justify-center px-2 gap-2 text-center text-white">
            <div className="p-4 rounded-md shadow-xl shadow-gray-900/70">
              <div
                id="tool"
                className="grid grid-cols-4 lg:gap-10 gap-6 lg:text-9xl text-7xl"
              >
                {tools.map(({ content, name }) => (
                  <Tooltip
                    content={content}
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0, y: 25 },
                    }}
                  >
                    <i className={name}></i>
                  </Tooltip>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

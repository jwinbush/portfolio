import { Tooltip } from "@material-tailwind/react";
import { motion as m } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
import { FaArrowDown } from "react-icons/fa";
import { Video } from "../components/video/Video";
import { Link } from "react-router-dom";

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
        from-orange-500 via-red-500 to-orange-500
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
              src="https://cdn.dribbble.com/users/653699/screenshots/15711093/media/babd4a52840eac22f088498b0cccb47b.mp4"
              id="myVideo1"
              muted={true}
              autoplay={true}
              loop={true}
            />
          </m.div>
          <div className="mr-auto place-self-center lg:col-span-7 lg:pl-10">
            <m.p
              variants={textVariant(0.6)}
              className="flex max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-2xl"
            >
              I am an aspiring architect turned full stack developer, driven by a 
              deep passion for both the art of design and the intricacies of software 
              development. With a solid foundation in architecture, I bring a unique 
              perspective to the world of programming, combining creativity and 
              technical expertise in my work.
            </m.p>

            <m.p
              variants={textVariant(0.6)}
              className="flex max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-2xl"
            >
              Having transitioned into the realm of technology, I have embraced the
              challenges and opportunities that come with being a full stack 
              developer. My architectural background has instilled in me a 
              meticulous attention to detail, a strong problem-solving ability, 
              and an appreciation for aesthetic design.
            </m.p>

            <button
              onClick={scrollToBottom}
              id="skills"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center rounded-md text-white bg-gradient-to-br from-gray-700 via-black to-gray-600 hover:bg-gradient-to-br shadow-xl hover:shadow-gray-700/50 animate-text"
            >
              Skills
              <FaArrowDown className="ml-2" />
            </button>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center rounded-md text-white bg-gradient-to-br from-orange-500 via-red-500 to-orange-500 hover:bg-gradient-to-br shadow-xl hover:shadow-red-400/50 animate-text"
            >
              Projects
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>

          <m.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className="lg:col-span-5 max-w-[700px] mr-6 rounded hidden lg:flex"
            data-te-ripple-init
          >
            <Video
              src="https://cdn.dribbble.com/users/653699/screenshots/15711093/media/babd4a52840eac22f088498b0cccb47b.mp4"
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
            from-orange-500 via-red-500 to-orange-400
        animate-text pb-4"
          >
            Professional Skillset
          </h2>
          <div className="flex justify-center px-2 gap-2 text-center text-white pb-8">
            <div className="p-4 rounded-md">
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
                  content="PHP"
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
                  <i className="devicon-php-plain"></i>
                </Tooltip>

                <Tooltip
                  content="Spring"
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
                  <i className="devicon-spring-plain"></i>
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
                  content="SQL"
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
                  <i className="devicon-mysql-plain"></i>
                </Tooltip>
                <Tooltip
                  content="MongoDB"
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
                  <i className="devicon-mongodb-plain"></i>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2
            className=" font-extrabold text-2xl lg:text-5xl bg-gradient-to-r bg-clip-text text-transparent 
            from-orange-500 via-red-500 to-orange-500
        animate-text pb-4"
          >
            Tools & Apps
          </h2>
          <div className="flex justify-center px-2 gap-2 text-center text-white">
            <div className="p-4 rounded-md">
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

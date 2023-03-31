import { Link } from "react-router-dom";
import bubble from "../assets/videos/bubble.mp4";
import { Tooltip } from "@material-tailwind/react";
import marvel from "../assets/videos/LogoAnimation.mp4";
import porsche from "../assets/videos/PorscheAnimation.mp4";
import $ from "jquery";


// import html from "../assets/images/skills/html.svg";
// import css from "../assets/images/skills/css.svg";
// import javascript from "../assets/images/skills/javascript.svg";

import { FaArrowDown } from "react-icons/fa";
import { Video } from "../components/video/Video";



  //jQuery scroll to top
  $(document).ready(function () {
    $("#skills").click(function () {
      window.scrollTo({ top: 950, behavior: "smooth" });
    });
  });

export default function About() {

  
  const tools = [
    { id: 1, content: "VS Code", name: "devicon-vscode-plain" },
    { id: 2, content: "Visual Studio", name: "devicon-visualstudio-plain" },
    { id: 3, content: "PhpStorm", name: "devicon-phpstorm-plain" },
    { id: 4, content: "Apache", name: "devicon-apache-plain" },
    { id: 5, content: "Adobe After Effects", name: "devicon-aftereffects-plain" },
    { id: 6, content: "Adobe Illustrator", name: "devicon-illustrator-plain" }
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
              challenges. In my free time I enjoy playing the piano, using Adobe
              After Effects, exercising, and getting out of my comfort zone.
            </p>

            <Link
              to="/about"
              id="skills"
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
                  <i class="devicon-html5-plain"></i>
                </Tooltip>

                <Tooltip
                  content="CSS3"
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
                  <i class="devicon-css3-plain"></i>
                </Tooltip>

                <Tooltip
                  content="TailwindCSS"
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
                  <i class="devicon-tailwindcss-plain"></i>
                </Tooltip>

                <Tooltip
                  content="JavaScript"
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
                  <i class="devicon-javascript-plain"></i>
                </Tooltip>

                <Tooltip
                  content="React"
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
                  <i class="devicon-react-plain"></i>
                </Tooltip>

                <Tooltip
                  content="TypeScript"
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
                  <i class="devicon-typescript-plain"></i>
                </Tooltip>

                <Tooltip
                  content="PHP"
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
                  <i class="devicon-php-plain"></i>
                </Tooltip>

                <Tooltip
                  content="C#"
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
                  <i class="devicon-csharp-plain"></i>
                </Tooltip>

                <Tooltip
                  content="Java"
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
                  <i class="devicon-java-plain"></i>
                </Tooltip>

                <Tooltip
                  content="MySQL"
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
                  <i class="devicon-mysql-plain"></i>
                </Tooltip>
                <Tooltip
                  content="Python"
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
                  <i class="devicon-python-plain"></i>
                </Tooltip>
                <Tooltip
                  content="R"
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
                  <i class="devicon-r-plain"></i>
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

      <section className="text-center">
        <h2
          className=" font-extrabold text-2xl lg:text-5xl text-white
        animate-text pb-4"
        >
          My recent work in Adobe After Effects.
        </h2>
        <div
          className="grid lg:grid-cols-2 px-2 gap-2 text-center"
          data-te-ripple-init
        >
          <video src={marvel} controls autoplay></video>
          <video src={porsche} controls autoplay></video>
        </div>
      </section>
    </div>
  );
}

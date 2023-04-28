import { Link } from "react-router-dom";
import car from "../assets/images/OdysseyScreenshot.png";
import movie from "../assets/images/CinefilmScreenshot.png";
import EchoChat from "../assets/images/EchoChat.png";
import { motion as m } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
import { Video } from "../components/video/Video";

export default function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <m.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="bg-black/95 w-full h-screen md:h-full lg:h-screen bg-top bg-cover duration-75 pt-20 lg:pt-36 pb-6"
      >
        <div className="grid max-w-full px-4 pt-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7 lg:pl-10">
            <m.div
              variants={slideIn("right", "tween", 0.2, 1)}
              className="flex lg:col-span-5 lg:hidden w-full lg:max-w-[700px] mr-6 rounded"
            >
              <Video
              src="https://cdn.dribbble.com/users/527197/screenshots/15676949/media/077b057dc5a3bd8d36c97639a993d0a9.mp4"
              id="myVideo1"
              alt="sphere"
              autoplay
              loop
            />
            </m.div>
            <m.div variants={textVariant(0.6)}>
              <p className="max-w-2xl mb-2 text-white text-2xl lg:text-6xl font-bold dark:text-gray-400">
                Hello, my name is
              </p>
              <h1
                className="max-w-3xl pb-4 font-extrabold tracking-tight leading-none text-5xl lg:text-8xl bg-gradient-to-r bg-clip-text  text-transparent 
              from-orange-500 via-red-500 to-orange-400
              animate-text"
              >
                Jay Winbush<span className="text-white">.</span>
              </h1>
              <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-2xl dark:text-gray-400">
                I'm a <span className="bg-gradient-to-r bg-clip-text  text-transparent 
              from-orange-500 via-red-500 to-orange-400 font-bold">Software Developer</span> who brings a creative and solution driven
                mindset to every team and project. I have great interest in full-stack development, human-computer interactions, and everything in between.
              </p>
            </m.div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center rounded-md text-white bg-gradient-to-br from-black to-gray-600 shadow-xl hover:shadow-gray-600/60"
            >
              Contact Me
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center rounded-md text-white bg-gradient-to-br from-orange-500 via-red-500 to-orange-500 hover:bg-gradient-to-br shadow-xl hover:shadow-red-400/50 animate-text"
            >
              About Me
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
            className="hidden lg:col-span-5 lg:flex max-w-[700px] mr-6 rounded-3xl"
            data-te-ripple-init
          >
            <Video
              src="https://cdn.dribbble.com/users/527197/screenshots/15676949/media/077b057dc5a3bd8d36c97639a993d0a9.mp4"
              id="myVideo1"
              alt="sphere"
              autoplay
              loop
              muted
            />
          </m.div>
        </div>
      </m.section>

      <section className="bg-black/95 h-full">
      <div class="relative flex py-5 items-center">
    <div class="flex-grow border-t border-gray-700"></div>
    <span class="flex-shrink mx-4 text-white sm:text-center"> Here are some of my recent works. This month I have focused primarly on building full-stack applications. </span>
    <div class="flex-grow border-t border-gray-700"></div>
</div>
      <p className="mb-8 lg:mb-16 font-light text-center text-white dark:text-gray-400 sm:text-xl">
        </p>
        <div className="grid lg:grid-cols-3 px-2 gap-2 text-center">
          <div data-te-ripple-init>
            <img src={movie} alt="Movie" className="rounded-t-md" />
            <div className="p-5 bg-gray-800/40 shadow-lg rounded-b-md">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                CineFilms
              </h5>

              <a
                href="https://github.com/jwinbush/movie"
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex items-center px-3 py-2 mr-2 text-center rounded-md text-white bg-gradient-to-br from-black to-gray-600 shadow-lg hover:shadow-gray-600/60 animate-text"
              >
                Repository
              </a>
              <a
                href="https://cinefilm.vercel.app"
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex items-center px-3 py-2 font-medium text-center rounded-md text-white bg-gradient-to-br from-orange-500 to-red-500 hover:bg-gradient-to-br shadow-lg hover:shadow-red-400/50 animate-text"
              >
                Live Demo
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
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
              </a>
              <div className="px-6 py-4">
                <span className="inline-block bg-gray-100 rounded-md px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                  react
                </span>
                <span className="inline-block bg-gray-100 rounded-md px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                  scss
                </span>
                <span className="inline-block bg-gray-100 rounded-md px-3 py-1 text-sm font-semibold text-gray-600">
                  api
                </span>
              </div>
            </div>
          </div>

          <div data-te-ripple-init>
            <img src={car} alt="Car" className="rounded-t-md" />
            <div className="p-5 bg-gray-800/40 shadow-lg rounded-b-md">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                Odyssey Rentals
              </h5>

              <a
                href="https://github.com/jwinbush/odysseyrentals"
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex items-center px-3 py-2 mr-2 text-center rounded-md text-white bg-gradient-to-br from-black to-gray-600 shadow-lg hover:shadow-gray-600/60 animate-text"
              >
                Repository
              </a>
              <a
                href="https://in-info-web4.informatics.iupui.edu/~jwinbush/OdysseyRentals/"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-md text-white bg-gradient-to-br from-orange-500 to-red-500 hover:bg-gradient-to-br shadow-lg hover:shadow-red-400/50 animate-text"
              >
                Live Demo
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
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
              </a>
              <div className="px-6 py-4">
                <span className="inline-block bg-gray-100 rounded-md px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                  oop-php
                </span>
                <span className="inline-block bg-gray-100 rounded-md px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                  mysql
                </span>
                <span className="inline-block bg-gray-100 rounded-md px-3 py-1 text-sm font-semibold text-gray-600">
                  tailwind-css
                </span>
              </div>
            </div>
          </div>
          <div data-te-ripple-init>
            <img src={EchoChat} alt="Spotify" className="rounded-t-md" />
            <div className="p-5 bg-gray-800/40 shadow-lg rounded-b-md">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
               Echo Chat
              </h5>

              <a
                href="https://github.com/jwinbush/mern-social-media"
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex items-center px-3 py-2 mr-2 text-center rounded-md text-white bg-gradient-to-br from-black to-gray-600 shadow-lg hover:shadow-gray-600/60 animate-text"
              >
                Repository
              </a>
              
              <div className="px-6 py-4">
                <span className="inline-block bg-gray-100 rounded-md px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                  mern-stack
                </span>
                <span className="inline-block bg-gray-100 rounded-md px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                 material-ui
                </span>
                <span className="inline-block bg-gray-100 rounded-md px-3 py-1 text-sm font-semibold text-gray-600">
                redux
                </span>
              </div>
            </div>
          </div>
          <div></div>
          <div>
            <Link
              to="/portfolio"
              className="mt-10 inline-flex  items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center rounded-md text-white bg-gradient-to-br from-orange-500 via-red-500 to-orange-500 hover:bg-gradient-to-br shadow-lg hover:shadow-red-400/50"
            >
              All Projects
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
          <div></div>
        </div>
      </section>
    </div>
  );
}

import { Link } from "react-router-dom";
import car from "../assets/videos/OdysseyRentals.mp4";
import movie from "../assets/videos/cineFilms.mp4";
import spotify from "../assets/videos/Spotify.mp4";
import emerald from "../assets/images/emerald.png";

export default function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="bg-black w-full h-screen bg-top bg-cover duration-75 pt-20 lg:pt-36 pb-6">
        <div className="grid max-w-full px-4 pt-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7 lg:pl-10">
            <div
              className="flex lg:col-span-5 lg:hidden w-full lg:max-w-[700px] mr-6 rounded"
            >
              <img
                src={emerald}
                alt="Lighthouse"
               
              />
            </div>
            <p className="inline-flex max-w-2xl mb-2 text-white text-2xl lg:text-6xl font-bold dark:text-gray-400">
              Welcome, I'm
            </p>
            <h1
              className="lg:inline-flex max-w-3xl pb-4 font-extrabold tracking-tight leading-none text-5xl lg:text-8xl bg-gradient-to-r bg-clip-text  text-transparent 
              from-cyan-400 via-emerald-300 to-cyan-400
              animate-text"
            >
              Jay Winbush<span className="text-white">.</span>
            </h1>
            <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-2xl dark:text-gray-400">
              Software Developer who brings a creative and solution driven
              mindset to every team and project. Passionate about writing clean
              code that is reusable. My objective is to develop, maintain, and
              design applications that make a difference.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center rounded-md text-white bg-gradient-to-br from-black to-gray-600 shadow-xl hover:shadow-gray-600/60"
            >
              Contact Me
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center rounded-md text-black bg-gradient-to-br from-cyan-400 via-emerald-300 to-cyan-400 hover:bg-gradient-to-br shadow-xl shadow-cyan-400/50 animate-text"
            >
              Learn More
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
          <div
            className="hidden lg:col-span-5 lg:flex max-w-[700px] mr-6 rounded-3xl"
            data-te-ripple-init
          >
            <img
                src={emerald}
                alt="Lighthouse"
               
              />
          </div>
        </div>
      </section>

      <section className="bg-black h-full">
        <div className="grid lg:grid-cols-3 px-2 gap-2 text-center">
          <div className="rounded" data-te-ripple-init>
            <video
              src={movie}
              className="max-h-[300px]"
              controls
              autoplay
            ></video>
            <div className="p-5 bg-gradient-to-b from-black to-gray-900">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                CineFilms
              </h5>

              <a
                href="https://github.com/jwinbush/movie" rel="noopener noreferrer" target="_blank"
                className="inline-flex items-center px-3 py-2 mr-2 text-center rounded-md text-white bg-gradient-to-br from-black to-gray-600 shadow-lg hover:shadow-gray-600/60 animate-text"
              >
                Repository
              </a>
              <a
                href="https://cinefilm.vercel.app" rel="noopener noreferrer" target="_blank"
                className="inline-flex items-center px-3 py-2 font-medium text-center rounded-md text-black bg-gradient-to-br from-cyan-400 via-emerald-300 to-cyan-400 hover:bg-gradient-to-br shadow-lg shadow-cyan-400/50 animate-text"
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

          <div className="rounded" data-te-ripple-init>
            <video
              src={car}
              className="max-h-[300px]"
              controls
              autoplay
            ></video>
            <div className="p-5 bg-gradient-to-b from-black to-gray-900">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                Odyssey Rentals
              </h5>

              <a
                href="https://github.com/jwinbush/odysseyrentals" rel="noopener noreferrer" target="_blank"
                className="inline-flex items-center px-3 py-2 mr-2 text-center rounded-md text-white bg-gradient-to-br from-black to-gray-600 shadow-lg hover:shadow-gray-600/60 animate-text"
              >
                Repository
              </a>
              <a
                href="/" rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-md text-black bg-gradient-to-br from-cyan-400 via-emerald-300 to-cyan-400 hover:bg-gradient-to-br shadow-lg shadow-cyan-400/50 animate-text"
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
          <div className="rounded" data-te-ripple-init>
            <video
              src={spotify}
              className="max-h-[300px]"
              controls
              autoplay
            ></video>
            <div className="p-5 bg-gradient-to-b from-black to-gray-900">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                Spotify Clone
              </h5>

              <a
                href="https://github.com/jwinbush/spotify" rel="noopener noreferrer" target="_blank"
                className="inline-flex items-center px-3 py-2 mr-2 text-center rounded-md text-white bg-gradient-to-br from-black to-gray-600 shadow-lg hover:shadow-gray-600/60 animate-text"
              >
                Repository
              </a>
              <a
                href="https://jawonwinbush.com" rel="noopener noreferrer" target="_blank"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-md text-black bg-gradient-to-br from-cyan-400 via-emerald-300 to-cyan-400 hover:bg-gradient-to-br shadow-lg shadow-cyan-400/50 animate-text"
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
                  next
                </span>
                <span className="inline-block bg-gray-100 rounded-md px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                  tailwind-css
                </span>
                <span className="inline-block bg-gray-100 rounded-md px-3 py-1 text-sm font-semibold text-gray-600">
                  api
                </span>
              </div>
            </div>
          </div>
          <div></div>
          <div>
            <Link
              to="/portfolio"
              className="mt-10 inline-flex  items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center rounded-md text-black bg-gradient-to-br from-cyan-400 via-emerald-300 to-cyan-400 hover:bg-gradient-to-br shadow-lg shadow-cyan-400/50"
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

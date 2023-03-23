import { Link } from "react-router-dom";
import computer from "../assets/videos/cube.mp4";
import { Video } from "../components/VideoHero/Video";
export default function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <section
        className="bg-black w-full h-screen bg-top bg-cover duration-75 pt-20 lg:pt-36"
        style={{
          backgroundImage: "url('https://images.wallpapersden.com/image/download/black-minimalist-hex_bW1paWiUmZqaraWkpJRmbmdlrWZlbWU.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          // backgroundAttachment:'fixed'
        }}
      >
        <div className="grid max-w-full px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7 lg:pl-10">
          <div className="flex lg:col-span-5 lg:hidden max-w-[700px] mr-6 rounded" data-te-ripple-init>
            <Video
              src={computer}
              id="myVideo1"
              muted={true}
              autoplay={true}
              loop={true}
            />
          </div>
            <p className="max-w-2xl mb-2 text-white md:text-lg lg:text-6xl font-bold dark:text-gray-400">
              Welcome, I'm
            </p>
            <h1
              className="max-w-2xl pb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-8xl bg-gradient-to-r bg-clip-text  text-transparent 
              from-cyan-400 via-emerald-300 to-cyan-400
              animate-text"
            >
              Jay Winbush
            </h1>
            <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-2xl dark:text-gray-400">
              Self-motivated Software Developer who brings a creative and
              solution driven mindset to every team and project. Passionate
              about writing clean code that is reusable. My objective is to
              obtain an internship working as a Software Developer to develop,
              maintain, and design applications.
            </p>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center rounded-full text-white bg-gradient-to-r from-black to-gray-600 hover:bg-gradient-to-br shadow-lg hover:shadow-gray-600/50 animate-text"
            >
              Contact Me
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center rounded-full text-white bg-gradient-to-r from-cyan-400 via-emerald-300 to-cyan-400 hover:bg-gradient-to-br shadow-lg hover:shadow-cyan-500/50 animate-text"
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
          <div className="hidden lg:col-span-5 lg:flex max-w-[700px] mr-6 rounded" data-te-ripple-init>
            <Video
              src={computer}
              id="myVideo1"
              muted={true}
              autoplay={true}
              loop={true}
            />
          </div>
        </div>
      </section>

      {/* TAILWIND CSS CAROUSEL START
      <div
        id="carouselExampleCaptionsFull"
        className="relative"
        data-te-carousel-init
        data-te-carousel-slide
      >
        <div
          className="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
          data-te-carousel-indicators
        >
          <button
            type="button"
            data-te-target="#carouselExampleCaptionsFull"
            data-te-slide-to="0"
            data-te-carousel-active
            className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-te-target="#carouselExampleCaptionsFull"
            data-te-slide-to="1"
            className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-te-target="#carouselExampleCaptionsFull"
            data-te-slide-to="2"
            className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="relative w-full overflow-hidden after:clear-both after: after:content-['']">
          <div
            className="relative float-left -mr-[100%] hidden w-full !transform-none bg-cover bg-center bg-no-repeat opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-fade
            data-te-carousel-item
            data-te-carousel-active
          >
            <video className="" playsinline autoplay>
              <source
                className="fixed"
                src="https://tecdn.b-cdn.net/img/video/Lines.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
              <div className="flex h-full items-center justify-center">
                <div className="px-md-0 px-14 text-center text-white">
                  <h2 className="mb-4 text-3xl font-semibold">
                    Learn Tailwind Elements
                  </h2>
                  <h5 className="mb-6 text-lg font-semibold">
                    Best & free guide of responsive web design
                  </h5>
                  <div className="md:space-x-2">
                    <a
                      type="button"
                      className="mb-2 inline- rounded border-2 border-white px-6 py-2 text-xs font-medium uppercase leading-tight text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 md:mb-0"
                      href="#!"
                      role="button"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      Start tutorial
                    </a>
                    <a
                      type="button"
                      className="inline- rounded border-2 border-white px-6 py-2 text-xs font-medium uppercase leading-tight text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                      href="#!"
                      role="button"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="relative float-left -mr-[100%] hidden w-full !transform-none bg-cover bg-center bg-no-repeat opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-fade
            data-te-carousel-item
          >
            <video className="" playsinline autoplay muted loop>
              <source
                className=""
                src="https://tecdn.b-cdn.net/img/video/forest.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
              <div className="flex h-full items-center justify-center">
                <div className="px-md-0 px-14 text-center text-white">
                  <h2 className="mb-4 text-3xl font-semibold">
                    You can place here any content
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div
            className="relative float-left -mr-[100%] hidden w-full !transform-none bg-cover bg-center bg-no-repeat opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-fade
            data-te-carousel-item
          >
            <video className="" playsinline autoplay muted loop>
              <source
                className=""
                src="https://tecdn.b-cdn.net/img/video/Tropical.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
              <div className="flex h-full items-center justify-center">
                <div className="px-md-0 px-14 text-center text-white">
                  <h2 className="mb-4 text-3xl font-semibold">
                    And cover it with any mask
                  </h2>
                  <a
                    type="button"
                    className="inline- rounded border-2 border-white px-6 py-2 text-xs font-medium uppercase leading-tight text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                    href="#!"
                    role="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-te-target="#carouselExampleCaptionsFull"
          data-te-slide="prev"
        >
          <span className="inline- h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Previous
          </span>
        </button>
        <button
          className="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-te-target="#carouselExampleCaptionsFull"
          data-te-slide="next"
        >
          <span className="inline- h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Next
          </span>
        </button>
      </div> */}
    </div>
  );
}

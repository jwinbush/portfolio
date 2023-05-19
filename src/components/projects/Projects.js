import cineFilms from "../../assets/images/CinefilmScreenshot.png";
import Odyssey from "../../assets/images/OdysseyScreenshot.png";
import Instrumasters from "../../assets/images/Instrumaster.png";
import Spotify from "../../assets/images/SpotifyScreenshot.png";
import Sharp from "../../assets/images/Sharp.png";
import EchoChat from "../../assets/images/EchoChat.png";
import Portfolio from "../../assets/images/MyPortfolio.png";
// import { Tooltip } from "@material-tailwind/react";
// import { useState } from "react";

export default function Projects() {
  // const [showTextBox, setShowTextBox] = useState(false);

  // const handleButtonClick = () => {
  //   setShowTextBox(true);
  // };

  const list = [
    {
      id: 1,
      title: "Cine Films",
      imageFile: cineFilms,
      link1: "https://www.github.com/jwinbush/movie",
      link2: "https://cinefilm.vercel.app",
      content: "More Info",
      description:
        "Learning React: Building a movie website in React can be a great way to learn the framework and gain hands-on experience with React components, state management, routing, and other concepts. By building a project that involves data fetching, filtering, sorting, and displaying in a user-friendly interface, you can explore various React features and techniques, such as React hooks, context, lifecycle methods, and more. Personal interest: If you are a movie enthusiast or a film buff, creating a movie website in React can be a fun and engaging way to share your passion with others. You can create a website that lists your favorite movies, reviews, ratings, trailers, and other information, or you can build a website that aggregates data from various sources and provides a comprehensive database of movies and TV shows.",
      one: "react",
      two: "api",
      three: "scss",
    },
    {
      id: 2,
      title: "Spotify Clone",
      imageFile: Spotify,
      link1: "https://github.com/jwinbush/spotify",
      link2: "https://jawonwinbush.com",
      content: "More Info",
      one: "next",
      two: "api",
      three: "tailwind-css",
    },
    {
      id: 3,
      title: "Odyssey Rentals",
      imageFile: Odyssey,
      link1: "https://github.com/jwinbush/odysseyrentals",
      link2:
        "https://in-info-web4.informatics.iupui.edu/~jwinbush/OdysseyRentals/",
      content: "More Info",
      one: "php",
      two: "mysql",
      three: "tailwind-css",
    },
    {
      id: 4,
      title: "Echo Chat",
      imageFile: EchoChat,
      link1: "https://github.com/jwinbush/mern-social-media",

      content: "More Info",
      one: "mern-stack",
      two: "redux",
      three: "material-ui",
    },
  ];

  return (
    <div className="pt-32">
      <h1
        className="mb-4 text-4xl text-center font-extrabold lg:text-7xl bg-gradient-to-r bg-clip-text text-transparent 
        from-orange-500 via-red-500 to-orange-500
        animate-text"
      >
        Projects that I've worked on.
      </h1>
      <p className="text-center text-white text-2xl">More projects are on the way!</p>

      <div className="pt-32 grid lg:grid-cols-2">
        {list.map(
          ({
            title,
            imageFile,
            content,
            description,
            link1,
            link2,
            one,
            two,
            three,
          }) => (
            <section className="flex justify-center pb-10 px-4 text-center">
              <div className="bg-black text-white rounded-b shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img
                  className="w-full h-auto max-w-7xl rounded-t-md"
                  src={imageFile}
                  alt="img"
                  loading="lazy"
                />
                <div className="p-5 bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-b-md">
                  <div className=" flex justify-center">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">
                      {title}
                    </h5>

                    {/* <Tooltip
                      content={content}
                      animate={{
                        mount: { scale: 1, y: 0 },
                        unmount: { scale: 0, y: 25 },
                      }}
                    >
                      <button onClick={handleButtonClick}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 ml-2 mb-1"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#fff"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="16" x2="12" y2="12"></line>
                          <line x1="12" y1="8" x2="12" y2="8"></line>
                        </svg>
                      </button>
                    </Tooltip> */}
                  </div>
                  {/* <div className="flex justify-center items-center">
                    {showTextBox && (
                      <div className="fixed z-10 inset-0 bg-black/30 flex justify-center items-center text-black px-8">
                        <div className="bg-white rounded-lg p-8">
                          <h2 className="text-xl mb-4">Text Box</h2>
                          <p>{description}</p>
                          <button
                            className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded"
                            onClick={() => setShowTextBox(false)}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    )}
                  </div> */}

                  <a
                    href={link1}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="inline-flex items-center px-3 py-2 mr-2 text-sm font-medium text-center rounded-md text-white bg-gradient-to-br from-black to-gray-600 shadow-lg hover:shadow-gray-600/60 animate-text"
                  >
                    Repository
                  </a>
                  <a
                    href={link2}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-md text-white bg-gradient-to-br from-orange-400 via-red-500 to-orange-400 hover:bg-gradient-to-br shadow-lg shadow-red-400/50 animate-text"
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
                      {one}
                    </span>
                    <span className="inline-block bg-gray-100 rounded-md px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                      {two}
                    </span>
                    <span className="inline-block bg-gray-100 rounded-md px-3 py-1 text-sm font-semibold text-gray-600">
                      {three}
                    </span>
                  </div>
                </div>
              </div>
            </section>
          )
        )}
        <section className="flex justify-center pb-10 px-4 text-center">
          <div className="bg-black text-white rounded-b shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img
              src={Portfolio}
              className="w-full h-auto max-w-7xl rounded-t-md"
              alt="Sharp"
              loading="lazy"
            />

            <div className="p-5 bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-b-md">
              <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">
                My Portfolio
              </h5>

              <a
                href="https://www.github.com/jwinbush/portfolio"
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex items-center px-3 py-2 mr-2 text-sm font-medium text-center rounded-md text-white bg-gradient-to-br from-black to-gray-600 shadow-lg hover:shadow-gray-600/60 animate-text"
              >
                Repository
              </a>
              <a
                href="https://newportfolio2023.vercel.app"
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-md text-white bg-gradient-to-br from-orange-400 via-red-500 to-orange-400 hover:bg-gradient-to-br shadow-lg shadow-red-400/50 animate-text"
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
                  framer-motion
                </span>
                <span className="inline-block bg-gray-100 rounded-md px-3 py-1 text-sm font-semibold text-gray-600">
                  tailwind-css
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="flex justify-center pb-10 px-4 text-center">
          <div className="bg-black text-white  shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img src={Instrumasters} className="w-full h-auto max-w-7xl rounded-t-md" alt="Instrumasters" loading="lazy" />

            <div className="p-5 bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-b-md">
              <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">
                Instrumasters (In Progress)
              </h5>

            
              <a
                href="https://instrumasters.com"
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-md text-white bg-gradient-to-br from-orange-400 via-red-500 to-orange-400 hover:bg-gradient-to-br shadow-lg shadow-red-400/50 animate-text"
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
                  wordpress
                </span>

                <span className="inline-block bg-gray-100 rounded-md px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
elementor                </span>
<span className="inline-block bg-gray-100 rounded-md px-3 py-1 text-sm font-semibold text-gray-600">
css                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="flex justify-center pb-10 px-4 text-center">
          <div className="bg-black text-white  shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img src={Sharp} className="w-full h-auto max-w-7xl rounded-t-md" alt="Sharp" loading="lazy" />

            <div className="p-5 bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-b-md">
              <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">
                Sharp Wear - (In Progress)
              </h5>

              <a
                href="https://www.github.com/jwinbush/suits2023"
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex items-center px-3 py-2 mr-2 text-sm font-medium text-center rounded-md text-white bg-gradient-to-br from-black to-gray-600 shadow-lg hover:shadow-gray-600/60 animate-text"
              >
                Repository
              </a>
              <a
                href="https://sharpwear.vercel.app"
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-md text-white bg-gradient-to-br from-orange-400 via-red-500 to-orange-400 hover:bg-gradient-to-br shadow-lg shadow-red-400/50 animate-text"
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

                <span className="inline-block bg-gray-100 rounded-md px-3 py-1 text-sm font-semibold text-gray-600">
                  tailwind-css
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
      
    </div>
  );
}

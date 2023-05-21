import cineFilms from "../../assets/images/CinefilmScreenshot.png";
import Odyssey from "../../assets/images/OdysseyScreenshot.png";
import Instrumasters from "../../assets/images/Instrumaster.png";
import Spotify from "../../assets/images/SpotifyScreenshot.png";
import Sharp from "../../assets/images/Sharp.png";
import EchoChat from "../../assets/images/EchoChat.png";
// import Portfolio from "../../assets/images/MyPortfolio.png";
import { Tooltip } from "@material-tailwind/react";
import { useState } from "react";

export default function Projects() {
  const [showTextBoxOne, setShowTextBoxOne] = useState(false);

  const handleButtonClickOne = () => {
    setShowTextBoxOne(true);
  };

  const [showTextBoxTwo, setShowTextBoxTwo] = useState(false);

  const handleButtonClickTwo = () => {
    setShowTextBoxTwo(true);
  };

  const [showTextBoxThree, setShowTextBoxThree] = useState(false);

  const handleButtonClickThree = () => {
    setShowTextBoxThree(true);
  };

  // const [showTextBoxFour, setShowTextBoxFour] = useState(false);

  // const handleButtonClickFour = () => {
  //   setShowTextBoxFour(true);
  // };

  const [showTextBoxFive, setShowTextBoxFive] = useState(false);

  const handleButtonClickFive = () => {
    setShowTextBoxFive(true);
  };

  const [showTextBoxSix, setShowTextBoxSix] = useState(false);

  const handleButtonClickSix = () => {
    setShowTextBoxSix(true);
  };

  const [showTextBoxSeven, setShowTextBoxSeven] = useState(false);

  const handleButtonClickSeven = () => {
    setShowTextBoxSeven(true);
  };

  return (
    <div className="pt-32">
      <h1
        className="mb-4 text-4xl text-center font-extrabold lg:text-7xl bg-gradient-to-r bg-clip-text text-transparent 
        from-orange-500 via-red-500 to-orange-500
        animate-text"
      >
        Projects that I've worked on.
      </h1>
      <p className="text-center text-white text-2xl">
        More projects are on the way!
      </p>

      <div className="pt-32 grid lg:grid-cols-2">
        <section className="flex justify-center pb-10 px-4 text-center">
          <div className="bg-black text-white  shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img
              src={cineFilms}
              className="w-full h-auto max-w-7xl rounded-t-md"
              alt="cine"
              loading="lazy"
            />

            <div className="p-5 bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-b-md">
              <div className=" flex justify-center">
                <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">
                  Cine Films
                </h5>

                {
                  <Tooltip
                    content={`Learn More`}
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0, y: 25 },
                    }}
                  >
                    <button onClick={handleButtonClickOne}>
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
                  </Tooltip>
                }
              </div>
              {
                <div className="flex justify-center items-center">
                  {showTextBoxOne && (
                    <div className="fixed z-10 inset-0 bg-black/30 flex justify-center items-center text-black px-8">
                      <div className="bg-white rounded-lg p-8 max-w-3xl">
                        <h1 className="text-xl mb-4">Description</h1>
                        <p>
                          Cine Films is a website developed using React, SCSS,
                          TMDb API, and YouTube's API. By integrating the TMDb
                          and Youtube API, Cine Films fetches the latest movie
                          data, including popular titles, trailers, and related
                          information, providing users with comprehensive and
                          up-to-date film content. The SCSS styling adds a
                          polished touch to the website, along with a responsive
                          design across devices.
                        </p>
                        <button
                          className="mt-4 text-white bg-gradient-to-br from-orange-400 via-red-500 to-orange-400 hover:bg-gradient-to-br shadow-lg shadow-red-400/50 animate-text font-bold py-2 px-4 rounded"
                          onClick={() => setShowTextBoxOne(false)}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              }
              <a
                href="https://www.github.com/jwinbush/movie"
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex items-center px-3 py-2 mr-2 text-sm font-medium text-center rounded-md text-white bg-gradient-to-br from-black to-gray-600 shadow-lg hover:shadow-gray-600/60 animate-text"
              >
                Repository
              </a>
              <a
                href="https://cinefilm.vercel.app"
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
                  api
                </span>
                <span className="inline-block bg-gray-100 rounded-md px-3 py-1 text-sm font-semibold text-gray-600">
                  scss
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="flex justify-center pb-10 px-4 text-center">
          <div className="bg-black text-white  shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img
              src={Spotify}
              className="w-full h-auto max-w-7xl rounded-t-md"
              alt="spotify"
              loading="lazy"
            />

            <div className="p-5 bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-b-md">
              <div className="flex justify-center">
                <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">
                  Spotify Clone
                </h5>
                {
                  <Tooltip
                    content={`Learn More`}
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0, y: 25 },
                    }}
                  >
                    <button onClick={handleButtonClickTwo}>
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
                  </Tooltip>
                }
              </div>
              {
                <div className="flex justify-center items-center">
                  {showTextBoxTwo && (
                    <div className="fixed z-10 inset-0 bg-black/30 flex justify-center items-center text-black px-8">
                      <div className="bg-white rounded-lg p-8 max-w-3xl">
                        <h1 className="text-xl mb-4">Description</h1>
                        <p>
                          This is a Spotify Clone built using Next.js,
                          Middleware, the Spotify API, Tailwind CSS, NextAuth,
                          and Recoil. The Middleware layer enhances
                          functionality, enabling seamless integration of
                          various APIs and optimizing data flow between
                          different components. This website allows users to
                          access a vast library of songs and playlists. Tailwind
                          CSS ensures a visually appealing interface and
                          responsive design across devices. With NextAuth, users
                          can securely log in and access personalized features,
                          including playlist creation, saving favorite songs,
                          and social sharing. Recoil, powers the application
                          with efficient and predictable state management,
                          ensuring a smooth and reliable user experience.
                        </p>
                        <button
                          className="mt-4 text-white bg-gradient-to-br from-orange-400 via-red-500 to-orange-400 hover:bg-gradient-to-br shadow-lg shadow-red-400/50 animate-text font-bold py-2 px-4 rounded"
                          onClick={() => setShowTextBoxTwo(false)}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              }
              <a
                href="https://www.github.com/jwinbush/spotify"
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex items-center px-3 py-2 mr-2 text-sm font-medium text-center rounded-md text-white bg-gradient-to-br from-black to-gray-600 shadow-lg hover:shadow-gray-600/60 animate-text"
              >
                Repository
              </a>
              <a
                href="https://www.jawonwinbush.com"
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
                  next
                </span>
                <span className="inline-block bg-gray-100 rounded-md px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                  api
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
            <img
              src={Odyssey}
              className="w-full h-auto max-w-7xl rounded-t-md"
              alt="OdysseyRentals"
              loading="lazy"
            />

            <div className="p-5 bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-b-md">
              <div className="flex justify-center">
                <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">
                  Odyssey Rentals
                </h5>

                {
                  <Tooltip
                    content={`Learn More`}
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0, y: 25 },
                    }}
                  >
                    <button onClick={handleButtonClickThree}>
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
                  </Tooltip>
                }
              </div>
              {
                <div className="flex justify-center items-center">
                  {showTextBoxThree && (
                    <div className="fixed z-10 inset-0 bg-black/30 flex justify-center items-center text-black px-8">
                      <div className="bg-white rounded-lg p-8 max-w-3xl">
                        <h1 className="text-xl mb-4">Description</h1>
                        <p>
                          Odyssey Rentals is a rental car website built using
                          PHP, the MVC (Model-View-Controller) architecture,
                          MySQL database, CodeIgniter framework, and styled with
                          Tailwind CSS. The website incorporates an intuitive
                          admin panel, empowering administrators to efficiently
                          manage the rental process. Admins have the ability to
                          add and update vehicle listings, set rental rates, and
                          monitor reservations. The implementation of MVC
                          architecture and CodeIgniter framework ensures a
                          structured and organized codebase, enhancing code
                          maintainability and scalability. The integration with
                          MySQL database enables efficient storage and retrieval
                          of data related to vehicles, reservations, and user
                          profiles. With its registration system, users can
                          easily create accounts, manage their profiles, and
                          securely store their personal information.
                        </p>

                        <button
                          className="mt-4 text-white bg-gradient-to-br from-orange-400 via-red-500 to-orange-400 hover:bg-gradient-to-br shadow-lg shadow-red-400/50 animate-text font-bold py-2 px-4 rounded"
                          onClick={() => setShowTextBoxThree(false)}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              }

              <a
                href="https://www.github.com/jwinbush/OdysseyRentals"
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex items-center px-3 py-2 mr-2 text-sm font-medium text-center rounded-md text-white bg-gradient-to-br from-black to-gray-600 shadow-lg hover:shadow-gray-600/60 animate-text"
              >
                Repository
              </a>
              <a
                href="https://in-info-web4.informatics.iupui.edu/~jwinbush/OdysseyRentals/"
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
                  php
                </span>
                <span className="inline-block bg-gray-100 rounded-md px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                  mvc
                </span>
                <span className="inline-block bg-gray-100 rounded-md px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                  sql
                </span>
                <span className="inline-block bg-gray-100 rounded-md px-3 py-1 text-sm font-semibold text-gray-600">
                  tailwind-css
                </span>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="flex justify-center pb-10 px-4 text-center">
          <div className="bg-black text-white rounded-b shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img
              src={Portfolio}
              className="w-full h-auto max-w-7xl rounded-t-md"
              alt="portfolio"
              loading="lazy"
            />

            <div className="p-5 bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-b-md">
              <div className="flex justify-center">
                <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">
                  My Portfolio
                </h5>

                {
                  <Tooltip
                    content={`Learn More`}
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0, y: 25 },
                    }}
                  >
                    <button onClick={handleButtonClickFour}>
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
                  </Tooltip>
                }
              </div>
              {
                <div className="flex justify-center items-center">
                  {showTextBoxFour && (
                    <div className="fixed z-10 inset-0 bg-black/30 flex justify-center items-center text-black px-8">
                      <div className="bg-white rounded-lg p-8 max-w-3xl">
                        <h1 className="text-xl mb-4">Description</h1>
                        <p>
                          Odyssey Rentals is a rental car website built using
                          PHP, the MVC (Model-View-Controller) architecture,
                          MySQL database, CodeIgniter framework, and styled with
                          Tailwind CSS. The website incorporates an intuitive
                          admin panel, empowering administrators to efficiently
                          manage the rental process. Admins have the ability to
                          add and update vehicle listings, set rental rates, and
                          monitor reservations. The implementation of MVC
                          architecture and CodeIgniter framework ensures a
                          structured and organized codebase, enhancing code
                          maintainability and scalability. The integration with
                          MySQL database enables efficient storage and retrieval
                          of data related to vehicles, reservations, and user
                          profiles. With its registration system, users can
                          easily create accounts, manage their profiles, and
                          securely store their personal information.
                        </p>

                        <button
                          className="mt-4 text-white bg-gradient-to-br from-orange-400 via-red-500 to-orange-400 hover:bg-gradient-to-br shadow-lg shadow-red-400/50 animate-text font-bold py-2 px-4 rounded"
                          onClick={() => setShowTextBoxFour(false)}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              }

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
        </section> */}

        <section className="flex justify-center pb-10 px-4 text-center">
          <div className="bg-black text-white  shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img
              src={EchoChat}
              className="w-full h-auto max-w-7xl rounded-t-md"
              alt="EchoChat"
              loading="lazy"
            />

            <div className="p-5 bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-b-md">
              <div className="flex justify-center">
                <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">
                  Echo Chat
                </h5>
                {
                  <Tooltip
                    content={`Learn More`}
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0, y: 25 },
                    }}
                  >
                    <button onClick={handleButtonClickFive}>
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
                  </Tooltip>
                }
              </div>
              {
                <div className="flex justify-center items-center">
                  {showTextBoxFive && (
                    <div className="fixed z-10 inset-0 bg-black/30 flex justify-center items-center text-black px-8">
                      <div className="bg-white rounded-lg p-8 max-w-3xl">
                        <h1 className="text-xl mb-4">Description</h1>
                        <p>
                          Echo Chat is a social media website built on the MERN (MongoDB, Express.js, React, Node.js) stack.
                          Echo Chat provides a seamless social networking experience.
                          The registration system allows users to create personalized accounts, securely storing their information in MongoDB. 
                          Users can then connect and engage with others through the social media post system, where they can share thoughts, 
                          images, and videos, fostering meaningful interactions and vibrant conversations. The follow and unfollow system empowers
                          users to curate their network, staying connected with friends, influencers, and communities that resonate with their 
                          interests. With its modern design and responsive layout, 
                          Echo Chat offers an aesthetically pleasing and intuitive user experience across devices. 
                        </p>

                        <button
                          className="mt-4 text-white bg-gradient-to-br from-orange-400 via-red-500 to-orange-400 hover:bg-gradient-to-br shadow-lg shadow-red-400/50 animate-text font-bold py-2 px-4 rounded"
                          onClick={() => setShowTextBoxFive(false)}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              }

              <a
                href="https://www.github.com/jwinbush/mern-social"
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex items-center px-3 py-2 mr-2 text-sm font-medium text-center rounded-md text-white bg-gradient-to-br from-black to-gray-600 shadow-lg hover:shadow-gray-600/60 animate-text"
              >
                Repository
              </a>

              <div className="px-6 py-4">
                <span className="inline-block bg-gray-100 rounded-md px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                  react
                </span>
                <span className="inline-block bg-gray-100 rounded-md px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                  redux
                </span>
                <span className="inline-block bg-gray-100 rounded-md px-3 py-1 text-sm font-semibold text-gray-600">
                  mongodb
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="flex justify-center pb-10 px-4 text-center">
          <div className="bg-black text-white  shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img
              src={Sharp}
              className="w-full h-auto max-w-7xl rounded-t-md"
              alt="Sharp"
              loading="lazy"
            />

            <div className="p-5 bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-b-md">
              <div className="flex justify-center">
                <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">
                  Sharp Wear - (In Progress)
                </h5>
                {
                  <Tooltip
                    content={`Learn More`}
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0, y: 25 },
                    }}
                  >
                    <button onClick={handleButtonClickSix}>
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
                  </Tooltip>
                }
              </div>
              {
                <div className="flex justify-center items-center">
                  {showTextBoxSix && (
                    <div className="fixed z-10 inset-0 bg-black/30 flex justify-center items-center text-black px-8">
                      <div className="bg-white rounded-lg p-8 max-w-3xl">
                        <h1 className="text-xl mb-4">Description</h1>
                        <p>
                        Sharp Wear is a ecommerce website that showcases the perfect blend of style and functionality. 
                        Developed using React and styled with Tailwind CSS. The React components ensure smooth navigation and interactivity, allowing customers 
                        to effortlessly explore a wide range of trendy clothing and accessories. Tailwind CSS enhances the overall 
                        aesthetic appeal, providing a clean and visually stunning layout that complements the products on display.
                        Sharp Wear's intuitive search and filtering options make it easy for shoppers to find exactly what they're 
                        looking for, while secure payment gateways ensure a safe and convenient checkout process. Whether it's
                        trendy fashion or timeless classics, Sharp Wear is the go-to destination for individuals
                        seeking high-quality suits with a touch of sophistication.
                        </p>
                        <button
                          className="mt-4 text-white bg-gradient-to-br from-orange-400 via-red-500 to-orange-400 hover:bg-gradient-to-br shadow-lg shadow-red-400/50 animate-text font-bold py-2 px-4 rounded"
                          onClick={() => setShowTextBoxSix(false)}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              }

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
        <section className="flex justify-center pb-10 px-4 text-center">
          <div className="bg-black text-white  shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img
              src={Instrumasters}
              className="w-full h-auto max-w-7xl rounded-t-md"
              alt="Sharp"
              loading="lazy"
            />

            <div className="p-5 bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-b-md">
              <div className="flex justify-center">
                <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">
                  Instrumasters - (In Progress)
                </h5>
                {
                  <Tooltip
                    content={`Learn More`}
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0, y: 25 },
                    }}
                  >
                    <button onClick={handleButtonClickSeven}>
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
                  </Tooltip>
                }
              </div>
              {
                <div className="flex justify-center items-center">
                  {showTextBoxSeven && (
                    <div className="fixed z-10 inset-0 bg-black/30 flex justify-center items-center text-black px-8">
                      <div className="bg-white rounded-lg p-8 max-w-3xl">
                        <h1 className="text-xl mb-4">Description</h1>
                        <p>
                        Instrumasters is a user-friendly instrument course website built with
                        WordPress, Elementor, and PHP. Designed to cater to music enthusiasts of all levels, Instrumasters offers a wide 
                        range of courses to help individuals master various musical instruments.Instrumasters is the ultimate destination for aspiring musicians, offering a 
                        harmonious blend of WordPress's content management system, Elementor's design capabilities, and the
                        power of PHP to provide an unparalleled online learning experience in the world of music.
                        </p>

                        <button
                          className="mt-4 text-white bg-gradient-to-br from-orange-400 via-red-500 to-orange-400 hover:bg-gradient-to-br shadow-lg shadow-red-400/50 animate-text font-bold py-2 px-4 rounded"
                          onClick={() => setShowTextBoxSeven(false)}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              }

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
                  php
                </span>
                <span className="inline-block bg-gray-100 rounded-md px-3 py-1 text-sm font-semibold text-gray-600">
                  elementor
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-link";
import cineFilms from "../../assets/videos/cineFilms.mp4";
import Odyssey from "../../assets/videos/OdysseyRentals.mp4";

export default function Projects() {
  const list = [
    {
      id: 1,
      title: "Cine Films 🎥",
      videoFile: cineFilms,
      link: "https://cinefilm.vercel.app",
    },
    {
      id: 2,
      title: "Odyssey Rentals",
      videoFile: Odyssey,
      link: "https://github.com/jwinbush",
    },
  ];

  return (
    <div className="pt-32  grid-cols-2">
      {list.map(({ title, videoFile, link }) => (
        <section className="flex justify-center pb-10 px-4 text-center">
          <div className="bg-black text-white rounded-b shadow-md dark:bg-gray-800 dark:border-gray-700">
            <Link href="#">
              <video className="w-full h-auto max-w-7xl rounded-b" controls>
                <source src={videoFile} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Link>
            <div className="p-5 bg-gradient-to-r from-black to-gray-900 animate-text">
              <Link href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">
                  {title}
                </h5>
              </Link>
              <p className="mb-3 font-normal  dark:text-gray-400">
                Describe
              </p>
              <Link
                href={link}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-blue-700 rounded-lg"
              >
                <FaGithub size={20} />
              </Link>
              <Link
                href={link}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-xl text-white bg-gradient-to-r from-cyan-400 via-emerald-300 to-cyan-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-400 dark:focus:ring-cyan-800 shadow-xl hover:shadow-cyan-400/50 animate-text"
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
              </Link>
              <div className="px-6 py-4">
                <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                  #photography
                </span>
                <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                  #travel
                </span>
                <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600">
                  #winter
                </span>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
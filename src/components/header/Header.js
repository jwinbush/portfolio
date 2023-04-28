import "./header.css";
import React, { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";

import { Link } from "react-router-dom";

export default function Header() {
  const RefreshClickHome = () => {
    window.location.href = "/";
    // Call window.location.reload() to refresh the page
  };

  const RefreshClickAbout = () => {
    window.location.href = "/about";
    // Call window.location.reload() to refresh the page
  };

  const RefreshClickProjects = () => {
    window.location.href = "/portfolio";
    // Call window.location.reload() to refresh the page
  };

  const RefreshClickContact = () => {
    window.location.href = "/contact";
    // Call window.location.reload() to refresh the page
  };

  const headerRef = useRef(null);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <div>
      {/* <div id="gradient" className="py-[0.3rem] fixed w-full z-[1000]"></div> */}
      <nav
        ref={headerRef}
        className="flex items-center lg:px-6 py-3 justify-between flex-wrap mx-auto bg-transparent fixed w-full z-[100] shadow"
      >
        <div className="flex items-center flex-shrink-0 text-white mx-6">
          <span className="font-semibold text-xl tracking-tight">
            <Link to="/" className="flex items-center">
              <h1 className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white" >
                Winbush.
              </h1>
              
            </Link>
          </span>
        </div>

        <div className="flex items-center lg:order-2">
          <a
            href="https://github.com/jwinbush"
            target={`_blank`}
            className="bg-gradient-to-br from-black to-gray-700 hover:bg-gradient-to-br shadow-lg hover:shadow-gray-600/50 animate-text font-medium rounded-md text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
          >
            <FaGithub size={25} color="white" />
          </a>
          {/* <Link
            to="/resume"
            className="flex rounded-md text-black bg-gradient-to-br from-cyan-400 via-emerald-300 to-cyan-400 hover:bg-gradient-to-br  shadow-lg shadow-cyan-400/60 animate-text px-3 py-2"
          >
            <FaFilePdf className="mr-1 mt-1" />
            Resume
          </Link> */}

          <button
            id="menu-list"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-white rounded-md lg:hidden"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "" : "hidden"
          } w-full block flex-grow lg:flex lg:items-center lg:w-auto text-center backdrop-filter backdrop-blur-lg z-[50000] h-screen lg:h-auto`}
        >
          <div className="pt-[45%] lg:pt-0 text-2xl lg:text-sm lg:flex-grow font-bold lg:font-normal">
            <Link
              to="/"
              onClick={RefreshClickHome}
              className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 lg:mx-8"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={RefreshClickAbout}
              className="block mt-4 lg:inline-block lg:mt-0 text-white  mr-4 lg:mx-8"
            >
              About
            </Link>
            <Link
              to="/portfolio"
              onClick={RefreshClickProjects}
              className="block mt-4 lg:inline-block lg:mt-0 text-white  mr-4 lg:mx-8"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              onClick={RefreshClickContact}
              className="block mt-4 lg:inline-block lg:mt-0 text-white  mr-4 lg:mx-8"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

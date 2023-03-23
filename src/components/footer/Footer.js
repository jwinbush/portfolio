import React from "react";
import { Link } from "react-router-link";

export default function Footer() {
  return (
    <footer className="px-4 bg-black shadow md:flex md:items-center justify-between md:p-6 py-2">
      <span className="text-sm text-white sm:text-center">
        © 2023
        <Link to="/">JW</Link>
         All Rights Reserved. 
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-white sm:mt-0">
        <li>
          <Link to="#" className="mr-4 hover:underline md:mr-6 ">
            About
          </Link>
        </li>
        <li>
          <Link to="#" className="mr-4 hover:underline md:mr-6">
            Projects
          </Link>
        </li>
        <li>
          <Link to="#" className="mr-4 hover:underline md:mr-6">
            Contact
          </Link>
        </li>
      </ul>
    </footer>
  );
}

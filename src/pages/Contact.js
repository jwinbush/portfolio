import React from "react";
import gmail from "../assets/images/gmail.png";
import linkedin from "../assets/images/linkedin.png";
import github from "../assets/images/github.png";
import phone from "../assets/images/iphone-messages-app.png"

import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <section className="bg-black h-screen pt-14">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-md">
        <h1
          className="mb-4 text-4xl text-center font-extrabold lg:text-7xl bg-gradient-to-br bg-clip-text text-transparent 
              from-cyan-400 via-emerald-300 to-cyan-400
              animate-text"
        >
          Get in touch.
        </h1>
        <div className="flex justify-center">
          <img className="lg:w-20 lg:h-20 w-16 h-16 shadow-md hover:shadow-white/20" src={gmail} alt="" />
          <img className="lg:w-20 lg:h-20 w-16 h-16" src={linkedin} alt="" />
          <img className="lg:w-20 lg:h-20 w-16 h-16" src={github} alt="" />
          <img className="lg:w-20 lg:h-20 w-16 h-16" src={phone} alt="" />
        </div>
        <p className="mb-8 lg:mb-16 font-light text-center text-white dark:text-gray-400 sm:text-xl">
          If you wanna get in touch, talk to me about a project collaboration,
          or just say hello, fill out the form below and send an email to
          <b> jawonwinbush@gmail.com</b>.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label 
              for="email"
              className="block mb-2 text-sm font-medium text-white dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="example@email.com"
              required
            />
          </div>
          <div>
            <label
              for="subject"
              className="block mb-2 text-sm font-medium text-white dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="How can I help you?"
              required
            />
          </div>
          <div className="sm:col-span-2 pb-10" >
            <label
              for="message"
              className="block mb-2 text-sm font-medium text-white dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>

          <Link
            to="mailto:jawonwinbush@gmail.com"
            target="_blank"
            className=" text-sm font-medium text-center rounded-md text-white bg-gradient-to-br from-cyan-400 via-emerald-300 to-cyan-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-400 dark:focus:ring-cyan-800 shadow-lg hover:shadow-cyan-400/50 animate-text px-4 py-3"
          >
            Send message
          </Link>
        </form>
      </div>
    </section>
  );
}

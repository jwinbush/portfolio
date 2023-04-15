// import React from "react";
// import { Link } from "react-router-dom";

// export default function Contact() {
//   return (
//     <section className="bg-black h-full pt-14">
//       <div className="py-8 lg:py-16 mx-auto max-w-screen-md">
// <h1
//   className="mb-4 text-4xl text-center font-extrabold lg:text-7xl bg-gradient-to-br bg-clip-text text-transparent
//       from-cyan-400 via-emerald-300 to-cyan-400
//       animate-text"
// >
//           Get in touch.
//         </h1>
// <div className="flex justify-center">
//   <Link to="mailto:jawonwinbush@gmail.com" target="_blank">
//     <img
//       className="cursor-pointer lg:w-20 lg:h-20 w-16 h-16 shadow-md"
//       src={gmail}
//       alt=""
//     />
//   </Link>
//   <Link to="https://www.linkedin.com/in/jawonmwinbush/" target="_blank">
//     <img
//       className="cursor-pointer lg:w-20 lg:h-20 w-16 h-16"
//       src={linkedin}
//       alt=""
//     />
//   </Link>
//   <Link to="https://github.com/jwinbush" target="_blank">
//     <img
//       className="cursor-pointer lg:w-20 lg:h-20 w-16 h-16"
//       src={github}
//       alt=""
//     />
//   </Link>
//   <Link to="tel:3176544324" target="_blank">
//     <img
//       className="cursor-pointer lg:w-20 lg:h-20 w-16 h-16"
//       src={phone}
//       alt=""
//     />
//   </Link>
// </div>
// <p className="mb-8 lg:mb-16 font-light text-center text-white dark:text-gray-400 sm:text-xl">
//   If you wanna get in touch, talk to me about a project collaboration,
//   or just say hello, fill out the form below and send an email to
//   <b> jawonwinbush@gmail.com</b>.
// </p>
//         <form action="#" className="space-y-8 px-4">
//           <div>
//             <label
//               for="email"
//               className="block mb-2 font-medium text-white dark:text-gray-300"
//             >
//               Your email
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="shadow-sm bg-white border border-gray-300 text-black rounded-md block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light"
//               placeholder="example@email.com"
//               required
//             />
//           </div>
//           <div>
//             <label
//               for="subject"
//               className="block mb-2 font-medium text-white dark:text-gray-300"
//             >
//               Subject
//             </label>
//             <input
//               type="text"
//               id="subject"
//               className="block p-3 w-full text-black bg-gray-50 rounded-md border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
//               placeholder="How can I help you?"
//               required
//             />
//           </div>
//           <div className="sm:col-span-2 pb-10">
//             <label
//               for="message"
//               className="block mb-2  font-medium text-white dark:text-gray-400"
//             >
//               Your message
//             </label>
//             <textarea
//               id="message"
//               rows="6"
//               className="block p-2.5 w-full text-black bg-gray-50 rounded-md shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//               placeholder="Leave a comment..."
//             ></textarea>
//           </div>

//           <Link
//             to="mailto:jawonwinbush@gmail.com"
//             target="_blank"
//             className="font-medium text-center rounded-md text-black bg-gradient-to-br from-cyan-400 via-emerald-300 to-cyan-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none shadow-xl shadow-cyan-400/50 animate-text px-4 py-4"
//           >
//             Send message
//           </Link>
//         </form>
//       </div>
//     </section>
//   );
// }

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import linkedin from "../assets/images/linkedin.png";
import github from "../assets/images/github.png";
import phone from "../assets/images/iphone-messages-app.png";

// import SuccessAlert from "../components/alert/Alert";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send email using EmailJS
    try {
      const result = await emailjs.sendForm(
        "service_jwinbush", // Replace with your EmailJS service ID
        "template_jwinbush", // Replace with your EmailJS template ID
        e.target,
        "NFdToIqG1SOsG4dAv" // Replace with your EmailJS user ID
      );
      console.log(result);
      alert("Email sent successfully!");
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to send email. Please try again later.");
    }

    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };

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
          <Link to="https://www.linkedin.com/in/jawonmwinbush/" target="_blank">
            <img
              className="cursor-pointer lg:w-20 lg:h-20 w-16 h-16"
              src={linkedin}
              alt=""
            />
          </Link>
          <Link to="https://github.com/jwinbush" target="_blank">
            <img
              className="cursor-pointer lg:w-20 lg:h-20 w-16 h-16"
              src={github}
              alt=""
            />
          </Link>
          <Link to="tel:3176544324" target="_blank">
            <img
              className="cursor-pointer lg:w-20 lg:h-20 w-16 h-16"
              src={phone}
              alt=""
            />
          </Link>
        </div>
        <p className="mb-8 lg:mb-16 font-light text-center text-white dark:text-gray-400 sm:text-xl">
          If you wanna get in touch, talk to me about a project collaboration,
          or just say hello, fill out the form below.
        </p>
        <form onSubmit={handleSubmit} className="space-y-8 px-4">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 font-medium text-white dark:text-gray-300"
            >
              Name:
            </label>
            <input
              className="shadow-sm bg-white border border-gray-300 text-black rounded-md block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light"
              type="name"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 font-medium text-white dark:text-gray-300"
            >
              Email:
            </label>
            <input
              className="shadow-sm bg-white border border-gray-300 text-black rounded-md block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 font-medium text-white dark:text-gray-300"
            >
              Message:
            </label>
            <textarea
              className="shadow-sm bg-white border border-gray-300 text-black rounded-md block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="font-medium text-center rounded-md text-black bg-gradient-to-br from-cyan-400 via-emerald-300 to-cyan-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none shadow-xl shadow-cyan-400/50 animate-text px-4 py-4"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

import React, { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

//scroll-to-top classes: fixed, bottom:0, right:0
  return (
    <button
    type="button"
    id="btn-back-to-top"
    data-te-ripple-init
    data-te-ripple-color="light"
    className={`${isVisible ? "show" : ""} scrollToTop bg-black z-[3000] rounded-full bottom-5 right-5 inline-block p-2 uppercase leading-normal text-white transition duration-150 ease-in-out fixed`}
    onClick={scrollToTop}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke-width="2.5"
      stroke="currentColor"
      className="h-4 w-4"
    >
      <path
        fill-rule="evenodd"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
        clip-rule="evenodd"
      />
    </svg>
  </button>

  );
}

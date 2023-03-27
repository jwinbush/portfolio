import React from "react";
import $ from "jquery";

export default function ScrollToTop() {

  //jQuery scroll to top
  $(document).ready(function () {
    $("#btn-back-to-top").click(function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  return (
     <div>
    {/* <!-- Back to top button --> */}
    <button
      type="button"
      id="btn-back-to-top"
      data-te-ripple-init
      data-te-ripple-color="light"
      className="bg-black z-50 fixed rounded-full bottom-5 right-5 inline-block p-2 uppercase leading-normal text-white transition duration-150 ease-in-out"
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
  </div>
  );
}
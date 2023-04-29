import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Social() {
  return (
    <div class="fixed bottom-0 left-0 flex flex-col space-y-1 text-white">
      <Link to="/contact" class="p-2 rounded-full">
        <FaMailBulk width={20} />
      </Link>
      <Link
        to="https://www.linkedin.com/in/jawonmwinbush/"
        class="p-2 rounded-full"
        target="_blank"
      >
        <FaLinkedin width={20} />
      </Link>
      <Link
        to="https://github.com/jwinbush"
        class="p-2 rounded-full"
        target="_blank"
      >
        <FaGithub width={20} />
      </Link>
    </div>
  );
}

import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";

const Icon = ({ name }) => {
  switch (name) {
    case "circle":
      return <FaRegCircle className="icon" />;
      break;

    case "cross":
      return <FaTimes className="icon" />;
      break;

    default:
      return <FaPen className="icon" />;
  }
};

export default Icon;

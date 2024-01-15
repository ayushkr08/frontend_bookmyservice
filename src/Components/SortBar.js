import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsUpDown } from "@fortawesome/free-solid-svg-icons";
const SortBar = () => {
  return (
    <div className="box-border w-1/2 m-auto flex flex-row justify-around bg-gray-300 shadow-2xl shadow-gray-500/50">
      <div>SORT BY :</div>
      <div className="space-x-1">
        <button>Rating</button>
        <FontAwesomeIcon icon={faArrowsUpDown} />
      </div>
      <div className="space-x-1">
        <button>Price</button>
        <FontAwesomeIcon icon={faArrowsUpDown} />
      </div>
      <div className="space-x-1">
        <button>Distance</button>
        <FontAwesomeIcon icon={faArrowsUpDown} />
      </div>
    </div>
  );
};
export default SortBar;

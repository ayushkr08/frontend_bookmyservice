import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsUpDown } from "@fortawesome/free-solid-svg-icons";
const SortBar = (props) => {
  return (
    <div className="box-border w-full px-96 flex flex-row justify-around bg-gray-300 shadow-2xl shadow-gray-500/50">
      <div>SORT BY :</div>
      <div className="space-x-1">
        <button onClick={props.ratingClickHandler}>Rating</button>
        <FontAwesomeIcon icon={faArrowsUpDown} />
      </div>
      <div className="space-x-1">
        <button onClick={props.priceClickHandler}>Price</button>
        <FontAwesomeIcon icon={faArrowsUpDown} />
      </div>
      <div className="space-x-1">
        <button onClick={props.distanceClickHandler}>Distance</button>
        <FontAwesomeIcon icon={faArrowsUpDown} />
      </div>
    </div>
  );
};
export default SortBar;

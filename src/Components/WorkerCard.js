import sampleImage from "../DummyData/Assets/sampleWorkerImage.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import Rating from "@mui/material/Rating";
const WorkerCard = (props) => {
  return (
    <div className="justify-between box-border flex flex-row w-1/3 shadow-2xl shadow-gray-500/50 rounded-lg m-auto mt-8">
      <img src={sampleImage} />
      <div className="space-y-10">
        <div>{"Name : " + props.data.Name}</div>
        <div>{"Experience : " + props.data.Experience + "+ yrs"}</div>
        <div>{props.data.Distance + " kms away"}</div>
        {/* <div>
          {props.data.Rating + " "}
          <FontAwesomeIcon icon={faStar} />
        </div> */}
        <div>
          <Rating
            name="half-rating"
            defaultValue={props.data.Rating}
            precision={0.1}
            readOnly
          />
        </div>
        <div>
          <FontAwesomeIcon icon={faIndianRupeeSign} />
          {" " + props.data.Price + " /-"}
        </div>
      </div>
      <div className="flex justify-end items-end relative">
        <button className="box-border bg-gray-300 w-full text-xl">
          {" "}
          Book now
        </button>
      </div>
    </div>
  );
};
export default WorkerCard;

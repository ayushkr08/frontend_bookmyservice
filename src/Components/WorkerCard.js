import sampleImage from "../DummyData/Assets/sampleWorkerImage.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";

const WorkerCard = (props) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between box-border w-full max-w-3xl shadow-2xl shadow-gray-500/50 rounded-lg m-auto mt-8 p-4">
      <img src={sampleImage} className="w-36 h-36 md:w-44 md:h-44 object-cover rounded-lg" alt="Worker" />
      <div className="flex flex-col space-y-4 md:space-y-10 md:ml-6">
        <div className="text-lg font-semibold">{"Name : " + props.data.Name}</div>
        <div className="text-md">{"Experience : " + props.data.Experience + "+ yrs"}</div>
        <div className="text-md">{props.data.Distance + " kms away"}</div>
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
        <div className="flex items-center">
          <FontAwesomeIcon icon={faIndianRupeeSign} />
          <span className="ml-1 text-md font-medium">{props.data.Price} /-</span>
        </div>
      </div>
      <div className="flex justify-end items-end w-full md:w-auto mt-4 md:mt-0">
        {/* <button className="box-border bg-gray-300 w-full text-xl">
          {" "}
          Book now
        </button> */}
        <Link
          to="/payment-confirmation"
          state={{ bookingDate: props.data.date, bookingAmount: props.data.price }} // Pass booking details as state
          className="box-border bg-gray-300 py-2 px-4 rounded-lg text-xl text-center w-full md:w-auto"
        >
          Book Now
        </Link>

      </div>
    </div>
  );
};
export default WorkerCard;

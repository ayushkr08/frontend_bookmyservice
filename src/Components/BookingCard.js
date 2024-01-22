import { Link } from "react-router-dom";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";

const BookingCard = (props) => {
  let [canBookNow, setCanBookNow] = useState(false);
  let [toolTipOpen, setToolTipOpen] = useState(false);

  let dateTimePickerOnChangeHandler = (date_time, validation) => {
    console.log("onchange", date_time, validation);
    if (validation.validationError === "invalidDate") {
      setCanBookNow(false);
    } else {
      setCanBookNow(true);
    }
  };

  let toolTipOpenHandler = () => {
    /**
     * Open the tooltip only when the handler is closed and you can't book due to invalid date being picked
     * */
    if (canBookNow) {
      setToolTipOpen(false);
    } else {
      setToolTipOpen(true);
    }
  };

  let toolTipCloseHandler = () => {
    setToolTipOpen(false);
  };

  return (
    <div className="box-border bg-gray-200 basis-1/3 rounded-lg m-8 shadow-2xl shadow-gray-500/50">
      <div>
        <img src={props.image} />
      </div>
      <div className="m-3 font-medium tracking-widest">{props.name}</div>
      <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            onChange={dateTimePickerOnChangeHandler}
            disablePast={true}
            label="Choose Your Slot"
          />
        </LocalizationProvider>
      </div>
      <div className="flex justify-center">
        <Tooltip
          title="Choose preferred slot"
          placement="right"
          open={toolTipOpen}
          onOpen={toolTipOpenHandler}
          onClose={toolTipCloseHandler}
          arrow
        >
          <div className="m-4 box-border bg-gray-300 p-4 hover:bg-gray-500 w-1/3">
            <Link to={"/book/" + props.name}>
              <button className="tracking-wide" disabled={!canBookNow}>
                Book Now
              </button>
            </Link>
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default BookingCard;

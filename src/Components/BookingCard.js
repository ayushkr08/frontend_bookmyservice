import {Link} from 'react-router-dom'
import {DateTimePicker,LocalizationProvider} from '@mui/x-date-pickers'
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'


const BookingCard = (props) => {
    return (
        <div className="box-border bg-gray-200 basis-1/3 rounded-lg m-8 shadow-2xl shadow-gray-500/50">
          <div>
            <img src={props.image}/>
          </div>
          <div className="m-3 font-medium tracking-widest">
            {props.name}
          </div>
          <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker 
                onChange={(date_time,validation) => {console.log("onchange",date_time, validation)}} 
                onAccept={(a) => {console.log("onaccept", a)}}
                onClose={() => {console.log("onclose")}}
                disablePast={true}
                label="Choose Your Slot"/>
            </LocalizationProvider>
          </div>
            <div className="flex justify-center">
              <div className="m-4 box-border bg-gray-300 p-4 hover:bg-gray-500 w-1/3">
                <Link to={"/book/" + props.name}> 
                  <button className="tracking-wide" disabled={false}>Book Now</button>
                </Link>
              </div>
            </div>
        </div>
    )
}

export default BookingCard;
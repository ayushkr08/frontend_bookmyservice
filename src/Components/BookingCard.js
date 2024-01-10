
const BookingCard = (props) => {
    return (
        <div class="box-border bg-gray-200 basis-1/3 rounded-lg m-8 shadow-2xl shadow-gray-500/50">
          <div>
            <img src={props.image}/>
          </div>
          <div className="m-3 font-medium tracking-widest">
            {props.name}
          </div>
          <div className="flex justify-center">
            <div className="m-4 box-border bg-gray-300 p-4 hover:bg-gray-500 w-1/3 cursor-pointer">
              <button className="tracking-wide">Book Now</button>
            </div>
          </div>
        </div>
    )
}

export default BookingCard;
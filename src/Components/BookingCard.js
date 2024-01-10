
const BookingCard = (props) => {
    return (
        <div class="box-border bg-gray-200 basis-1/3 rounded-lg m-8 shadow-2xl shadow-gray-500/50">
          <div>
            <img src={props.image}/>
          </div>
          <div>
            {props.name}
          </div>
          <div>
            <button>Book Now</button>
          </div>
        </div>
    )
}

export default BookingCard;
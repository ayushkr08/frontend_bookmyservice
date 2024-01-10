const BookingCard = (props) => {
    return (
        <div class="box-border bg-cyan-500 basis-1/3 rounded-full p-8 m-8 shadow-2xl shadow-cyan-500/50">
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
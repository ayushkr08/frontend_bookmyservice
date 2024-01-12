import {useParams} from 'react-router-dom'
const BookingForm = () => {
  let service = useParams();
  console.log("service", service);
  return(
    <div>
      <h1>
        book for {service.service}
      </h1>
    </div>
  )
}
export default BookingForm;
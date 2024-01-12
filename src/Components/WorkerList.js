import {useParams} from 'react-router-dom'
import WorkerCard from './WorkerCard';
const WorkerList = () => {
  let data = {
        Name: 'Alexander Garner',
        Distance: 0.8,
        Rating: 4.2,
        Price: 100,
        Experience: 3.5
    }
  return(
    <WorkerCard data={data}/>
  )
}
export default WorkerList;
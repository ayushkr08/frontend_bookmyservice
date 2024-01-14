import {useParams} from 'react-router-dom'
import WorkerCard from './WorkerCard';
import { maidData } from '../DummyData/maidData';
const WorkerList = () => {
  return(
    <>
    {maidData.map((singleWorker) => {
      return <WorkerCard key={singleWorker.Name} data={singleWorker}/>
    })}
    </>
  )
}
export default WorkerList;
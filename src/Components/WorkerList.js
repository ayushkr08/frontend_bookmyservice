import { useParams } from "react-router-dom";
import WorkerCard from "./WorkerCard";
import { maidData } from "../DummyData/maidData";
import SortBar from "./SortBar";
import { useState } from "react";
let isRatingSortedHighToLow = null;
const WorkerList = () => {
  let [localMaidData, setlocalMaidData] = useState(maidData);
  const ratingClickHandler = (e) => {
    if (isRatingSortedHighToLow == null) {
      isRatingSortedHighToLow = true;
    } else if (isRatingSortedHighToLow == true) {
      isRatingSortedHighToLow = false;
    } else {
      isRatingSortedHighToLow = true;
    }
    // ALways make a copy of state variable if you are going to change it.
    let copyOfLocalMaidData = JSON.parse(JSON.stringify(localMaidData));
    copyOfLocalMaidData.sort((maid1, maid2) => {
      if (isRatingSortedHighToLow == true) {
        return maid2.Rating - maid1.Rating;
      } else if (isRatingSortedHighToLow == false) {
        return maid1.Rating - maid2.Rating;
      }
    });
    setlocalMaidData(copyOfLocalMaidData);
  };
  return (
    <>
      <SortBar ratingClickHandler={ratingClickHandler} />
      {localMaidData.map((singleWorker) => {
        return <WorkerCard key={singleWorker.Name} data={singleWorker} />;
      })}
    </>
  );
};
export default WorkerList;

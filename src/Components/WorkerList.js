import WorkerCard from "./WorkerCard";
import { maidData } from "../DummyData/maidData";
import SortBar from "./SortBar";
import { useState } from "react";
let isRatingSortedHighToLow = null;
let isPriceSortedHighToLow = null;
let isDistanceSortedHighToLow = null;
const WorkerList = () => {
  let [localMaidData, setlocalMaidData] = useState(maidData);
  const sortDataBasedOnProperty = (propertyName) => {
    // ALways make a copy of state variable if you are going to change it.
    let copyOfLocalMaidData = JSON.parse(JSON.stringify(localMaidData));
    copyOfLocalMaidData.sort((maid1, maid2) => {
      switch (propertyName) {
        case "Rating":
          if (isRatingSortedHighToLow == true) {
            return maid2[propertyName] - maid1[propertyName];
          } else if (isRatingSortedHighToLow == false) {
            return maid1[propertyName] - maid2[propertyName];
          }
          break;
        case "Price":
          if (isPriceSortedHighToLow == true) {
            return maid2[propertyName] - maid1[propertyName];
          } else if (isPriceSortedHighToLow == false) {
            return maid1[propertyName] - maid2[propertyName];
          }
          break;
        case "Distance":
          if (isDistanceSortedHighToLow == true) {
            return maid2[propertyName] - maid1[propertyName];
          } else if (isDistanceSortedHighToLow == false) {
            return maid1[propertyName] - maid2[propertyName];
          }
          break;
        default:
          return 0;
      }
    });
    setlocalMaidData(copyOfLocalMaidData);
  };
  const ratingClickHandler = (e) => {
    console.log("event button", e.target.innerText);
    if (isRatingSortedHighToLow == null) {
      isRatingSortedHighToLow = true;
    } else if (isRatingSortedHighToLow == true) {
      isRatingSortedHighToLow = false;
    } else {
      isRatingSortedHighToLow = true;
    }
    sortDataBasedOnProperty("Rating");
  };
  const priceClickHandler = (e) => {
    console.log("event button", e.target.innerText);
    if (isPriceSortedHighToLow == null) {
      isPriceSortedHighToLow = true;
    } else if (isPriceSortedHighToLow == true) {
      isPriceSortedHighToLow = false;
    } else {
      isPriceSortedHighToLow = true;
    }
    sortDataBasedOnProperty("Price");
  };
  const distanceClickHandler = (e) => {
    console.log("event button", e.target.innerText);
    if (isDistanceSortedHighToLow == null) {
      isDistanceSortedHighToLow = true;
    } else if (isDistanceSortedHighToLow == true) {
      isDistanceSortedHighToLow = false;
    } else {
      isDistanceSortedHighToLow = true;
    }
    sortDataBasedOnProperty("Distance");
  };
  return (
    <>
      <SortBar
        ratingClickHandler={ratingClickHandler}
        priceClickHandler={priceClickHandler}
        distanceClickHandler={distanceClickHandler}
      />
      {localMaidData.map((singleWorker) => {
        return <WorkerCard key={singleWorker.Name} data={singleWorker} />;
      })}
    </>
  );
};
export default WorkerList;

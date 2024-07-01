import React from "react";
import TourDetailsOne from "./TourDetailsOne";
import TourDetailsTwo from "./TourDetailsTwo";

const TourDetailsPage = ({ tourDetail }) => {
  return (
    <>
      <TourDetailsOne tourDetail={tourDetail} />
      <TourDetailsTwo tourDetail={tourDetail} />
    </>
  );
};

export default TourDetailsPage;

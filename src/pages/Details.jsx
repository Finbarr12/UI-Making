import React from "react";
import Hero from "../Components/DetailsComponent/Hero";
import ImageBox from "../Components/DetailsComponent/ImageBox";
import Text from "../Components/DetailsComponent/Text";
import Responses from "../Components/DetailsComponent/Responses";
import { Popular } from "../Components";

const Details = () => {
  return (
    <div>
      <Hero />
      <ImageBox />
      <Text />
      <Responses />
      <Popular />
    </div>
  );
};

export default Details;

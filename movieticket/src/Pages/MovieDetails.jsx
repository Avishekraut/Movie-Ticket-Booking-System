import React from "react";
import Navbar from "../Components/Navbar";
import Card from "../Components/Card";
import { useParams } from "react-router-dom";
import PricingCard from "../Components/PricingCard";

const MovieDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <Navbar />
      <div className="flex mx-44 my-20 justify-between">
        <Card movieId={id} />
        <PricingCard />
      </div>
    </div>
  );
};

export default MovieDetails;

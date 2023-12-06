import React from "react";
import Navbar from "../Components/Navbar";
import Card from "../Components/Card";

const Home = () => {
  //IMDb ID for the latest movies
  const movieIds = ["tt13751694", "tt10786774", "tt29481471","tt18411490"];

  return (
    <div>
      <Navbar />
      <div className="flex mx-32 my-20 gap-20">
        {movieIds.map((id) => (
          <Card key={id} movieId={id} />
        ))}
      </div>
    </div>
  );
};

export default Home;

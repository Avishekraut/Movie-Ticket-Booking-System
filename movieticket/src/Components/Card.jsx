import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Card = ({ movieId }) => {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?i=${movieId}&apikey=da6651d7`
        );
        setMovieDetails(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading</div>;
  }

  return (
    <Link to={`/movie/${movieId}`}>
    <div>
      <img
        src={movieDetails.Poster}
        alt={movieDetails.Title}
        className="w-60 h-80"
      ></img>
      <div className="mt-4">
        <span className="flex justify-between">
          <p className="font-semibold">{movieDetails.Title}</p>
          <p className="text-sm font-semibold">{movieDetails.Year}</p>
        </span>
        <p className="text-sm mt-1">{movieDetails.Genre}</p>
      </div>
    </div>
    </Link>
  );
};

export default Card;

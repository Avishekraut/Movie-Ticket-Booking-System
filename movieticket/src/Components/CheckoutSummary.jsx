import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import useStore from "../store";


const CheckoutSummary = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const { ticketCount, totalPrice, setMovieDetail } = useStore();

  useEffect(() => {
    setMovieDetail(movieDetails);
  }, [movieDetails]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?i=${id}&apikey=da6651d7`
        );
        setMovieDetails(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movieDetails) {
    return <div>Loading</div>;
  }

  return (
    <div className="bg-[#252D3C] text-white p-6 rounded w-80 h-full">
      <h1 className="font-semibold text-lg mt-2">Checkout Summary</h1>
      <p className="font-semi-bold text-lg mt-4">{movieDetails.Title}</p>
      <p className="mt-2">Audi 2</p>

      <div className="flex justify-between mt-4 text-sm">
        <p>Normal</p>
        <p> X{ticketCount}</p>
        <p>$400.00</p>
      </div>
      <div className="flex justify-between mt-2 text-sm">
        <p>Sub Total</p>
        <p>${totalPrice.toFixed(2)}</p>
      </div>
      <div className="flex justify-between mt-2 text-sm">
        <p>Tax( 13% )</p>
        <p>${(totalPrice * 0.13).toFixed(2)}</p>
      </div>
      <div className="flex justify-between mt-2 text-sm">
        <p>Discount( 0% )</p>
        <p>$0</p>
      </div>
      <div className="flex justify-between mt-6 mb-2">
        <p>Total</p>
        <p className="text-lg font-semibold">
          ${(totalPrice + totalPrice * 0.13).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default CheckoutSummary;

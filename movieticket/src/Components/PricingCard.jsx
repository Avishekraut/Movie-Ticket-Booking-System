import React, { useState, useEffect } from "react";
import { IoCalendar } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FiMinusSquare, FiPlusSquare } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const PricingCard = () => {
  const [quantity, setQuantity] = useState(1);
  const [ticketPrice, setTicketPrice] = useState(400); // Initial ticket price
  const navigate = useNavigate();

  useEffect(() => {
    // Update the ticket price based on the quantity
    setTicketPrice(400 * quantity);
  }, [quantity]);

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  const handleCheckout = () => {
    // Navigate to the confirmation page
    navigate("/ConfirmationPage");
  };

  return (
    <div className="bg-[#252D3C] text-white p-6 rounded">
      <h1 className="font-semibold mt-2">Ticket Details</h1>
      <div className="flex items-center mt-4">
        <IoCalendar size={32} />
        <span className="mx-2">
          <p className="text-sm">Date and Time</p>
          <p className="font-medium text-base">Sat, Apr 30, 2022 11:30 AM</p>
        </span>
      </div>
      <div className="flex items-center mt-4">
        <FaLocationDot size={32} />
        <span className="mx-2">
          <p className="text-sm">Hall</p>
          <p className="font-medium text-base">Audi 2</p>
        </span>
      </div>
      <h1 className="mt-4 font-semibold">Select Tickets</h1>
      <div className="flex justify-between items-center">
        <span>
          <p className="mt-4">{quantity}x Ticket(s)</p>
          <p className="font-semibold mt-2">USD ${ticketPrice.toFixed(2)}</p>
        </span>
        <div className="flex items-center">
          <button onClick={decrementQuantity} className="mr-2">
            <FiMinusSquare size={20} />
          </button>
          <p className="font-semibold">{quantity}</p>
          <button onClick={incrementQuantity} className="ml-2">
            <FiPlusSquare size={20} />
          </button>
        </div>
      </div>
      <button onClick={handleCheckout} className="mt-4 min-w-full bg-primary hover:bg-[#cb3f4f] text-white font-semibold py-2 px-4 rounded">Check out for {ticketPrice.toFixed(2)}</button>
    </div>
  );
};

export default PricingCard;

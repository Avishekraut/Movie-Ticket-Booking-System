import React from "react";
import Form from "../Components/Form";
import Navbar from "../Components/Navbar";
import CheckoutSummary from "../Components/CheckoutSummary";

const ConfirmationPage = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-44 my-10">
        <h1 className="font-semibold text-lg">Order Confirmation</h1>
        <div className="flex justify-between">
          <Form />
          <CheckoutSummary />
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;

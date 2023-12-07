import React, { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import useStore from "../store";

const Form = () => {
  const initialValues = {
    fullName: "",
    email: "",
    address: "",
    country: "",
    state: "",
    city: "",
    zipCode: "",
  };
  const [formData, setFormData] = useState({ initialValues });
  const { movieDetail, ticketCount, totalPrice } = useStore();
  console.log(ticketCount);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const generatePDF = (formData, movieDetails, ticketCount, totalPrice) => {
    const pdf = new jsPDF();

    const title = [["Ticket Invoice "]];
    pdf.autoTable({
      startY: 10,
      startX: 50,
      head: title,
      headStyles: {
        fillColor: [203, 63, 79],
        textColor: [255, 255, 255],
      },
      columnStyles: { 0: { halign: "center" } },
    });

    // Display selected form fields at the top left
    const selectedFields = {
      "Invoice to": formData.fullName,
      Address: formData.address,
      City: formData.city,
    };

    let currentY = 30; // Initial Y position for the table

    Object.entries(selectedFields).forEach(([field, value]) => {
      pdf.setFontSize(10); // Set the font size (adjust as needed)
      pdf.text(20, currentY, field);
      pdf.text(60, currentY, value);
      currentY += 8; // Adjust this value based on your layout
    });

    // Display "Invoice ID" and "Date" on the right top corner
    const invoiceId = "Invoice ID: YCUU-069875";
    const currentDate = "OrderDate: " + new Date().toLocaleDateString();

    const topRightX = pdf.internal.pageSize.width - 20; // Right-align position

    pdf.setFontSize(12); // Set the font size for the right-top corner text (adjust as needed)
    pdf.text(topRightX, 30, invoiceId, { align: "right" });
    pdf.text(topRightX, 40, currentDate, { align: "right" });

    // For table
    const tableData = [
      ["Movie Name", "Ticket Count", "Total Price", "Discount", "Final Price"],
      [
        movieDetail.Title,
        ticketCount,
        totalPrice,
        0,
        totalPrice * ticketCount * 0.13,
      ],
    ];

    pdf.autoTable({
      startY: currentY + 10, // Start the table below the movie details
      head: [tableData[0]],
      body: [tableData[1]],
      showHead: "firstPage", // Show the header only on the first page
      theme: "grid", // Use a grid theme for the table
    });

    // Save the PDF
    pdf.save("invoice.pdf");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Data:", formData);
    generatePDF(formData);
  };

  return (
    <div className="mt-6">
      <h1 className="font-medium mb-4">Information</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="text-sm font-medium">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <span className="flex gap-4">
          <div className="w-full mb-4">
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md"
              required
            />
          </div>
          <div className="w-full mb-4">
            <label className="text-sm font-medium">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md"
              required
            />
          </div>
        </span>
        <span className="flex gap-4">
          <div className="w-full mb-4">
            <label className="text-sm font-medium">Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md"
              required
            />
          </div>
          <div className="w-full mb-4">
            <label className="text-sm font-medium">State</label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
        </span>
        <span className="flex gap-4">
          <div className="w-full mb-4">
            <label className="text-sm font-medium">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="w-full mb-4">
            <label className="text-sm font-medium">Zip/Post Code</label>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
        </span>
        <button
          type="submit"
          className="w-full bg-primary hover:bg-[#cb3f4f] text-white mt-2 py-2 px-4 rounded-md"
        >
          Confirm & pay
        </button>
      </form>
    </div>
  );
};

export default Form;

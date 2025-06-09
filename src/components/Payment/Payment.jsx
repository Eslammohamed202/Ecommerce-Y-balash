"use client";

import { useEffect, useState, useContext } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useRouter } from "next/navigation";
import { cartContext } from "../Context/AuthContext/CartContext";

const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MDU0YjFlZmQ3OTIwODE3ZDllYmI5YyIsImlhdCI6MTc0ODg2MDE5NiwiZXhwIjoxNzUxNDUyMTk2fQ.0fkUoakCkGAv4Shtp7Pz2BYkZ87RHB7wb02xOENSLnA';

export default function Payment() {
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState("Egypt");

  const { allItems, getUserCart } = useContext(cartContext);
  const router = useRouter();

  const countries = ["Egypt", "Saudi Arabia", "UAE", "Qatar", "Morocco", "Algeria"];

  const handlePayment = async () => {
    const correctCard = "4242424242424242";
    const correctCvv = "123";

    if (cardNumber === correctCard && cvv === correctCvv) {
      try {
        const { data } = await axios.post(
          "https://y-balash.vercel.app/api/purchases/payment",
          {}, // body is empty
          {
            headers: {
              Authorization: `Bearer ${TOKEN}`,
            },
          }
        );

        if (data.clientSecret) {
          Swal.fire("Success", "Payment completed correctly", "success");

          // 🧹 تفريغ السلة من السيرفر
          await getUserCart();

          // 🕒 إعادة التوجيه بعد 3 ثواني
          setTimeout(() => {
            router.push("/client-home");
          }, 3000);
        } else {
          Swal.fire("Error", "Something went wrong with payment", "error");
        }
      } catch (error) {
        console.error("Payment error:", error);
        if (error.response) {
          console.log("Error Response Data:", error.response.data);
          Swal.fire("Error", error.response.data.message || "API Error", "error");
        } else {
          Swal.fire("Error", "Network or unknown error occurred", "error");
        }
      }
    } else if (cvv !== correctCvv) {
      Swal.fire("Error", "Please enter the correct CVV number", "error");
    } else {
      Swal.fire("Error", "The card number is incorrect", "error");
    }
  };

  useEffect(() => {
    if (allItems?.length > 0) {
      const total = allItems.reduce((sum, el) => {
        const priceString = el?.itemId?.price || "0";
        const numericPrice = Number(priceString.replace(" EGP", "").trim()) || 0;
        return sum + numericPrice;
      }, 0);
      setTotalPrice(total);
    }
  }, [allItems]);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4">
        <input
          type="text"
          placeholder="Email Address"
          className="w-full border p-2 rounded-full"
        />

        <div>
          <p className="mb-1 font-medium">Card Number</p>
          <input
            type="text"
            maxLength="16"
            placeholder="1234 5678 9101 1121"
            className="w-full border p-2 rounded"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>

        <div className="flex justify-between gap-4">
          <div className="w-1/2">
            <p className="mb-1 font-medium">Expiration Date</p>
            <input type="date" className="w-full border p-2 rounded" />
          </div>
          <div className="w-1/2">
            <p className="mb-1 font-medium">CVV</p>
            <input
              type="number"
              placeholder="123"
              className="w-full border p-2 rounded"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          </div>
        </div>

        <div className="w-full max-w-sm mx-auto">
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <input type="checkbox" id="save" />
          <label htmlFor="save">Save card details</label>
        </div>

        <button
          onClick={handlePayment}
          className="w-full bg-[#369585] text-white py-2 rounded-full text-center"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}
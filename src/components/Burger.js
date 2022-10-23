import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { burgers } from "./data.js";

const Burger = () => {
  const { id } = useParams();
  const filteredItem = burgers.filter((burger) => burger.id === +id);
  const [item, setItem] = useState([]);
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [vat, setVat] = useState("");
  const [deliveryCharge, setDeliveryCharge] = useState("");

  const increaseQuantityHandler = () => {
    if (quantity < 10) {
      setQuantity((prev) => prev + 1);
      setPrice((prev) => prev + filteredItem[0].price);
      setVat((prev) => prev + (filteredItem[0].price * 5) / 100);
    }
  };

  const decreaseQuantityHandler = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
      setPrice((prev) => prev - filteredItem[0].price);
      setVat((prev) => prev - (filteredItem[0].price * 5) / 100);
    }
  };

  const currencyFormat = (amount) => {
    return amount.toLocaleString("bn-BD", {
      style: "currency",
      currency: "BDT",
    });
  };

  useEffect(() => {
    setItem(filteredItem);
    setQuantity(1);
    setPrice(filteredItem[0].price);
    setVat((filteredItem[0].price * 5) / 100);
    setDeliveryCharge(50);
  }, []);

  return (
    <section className="container mx-auto py-10 min-h-screen">
      {item.map((burger) => (
        <div className="item grid grid-cols-2 gap-10" key={burger.id}>
          <div className="item-left">
            <img src={burger.img} alt={burger.title} />
          </div>
          <div className="item-right flex flex-col gap-5">
            <h2 className="text-4xl font-semibold">{burger.title}</h2>
            <div className="quantity text-lg flex gap-3 items-center">
              <p className="text-xl font-semibold">Select quantity:</p>
              <p className="flex gap-3 font-bold text-xl text-orange-500 bg-orange-100 rounded items-center">
                <span
                  onClick={decreaseQuantityHandler}
                  className="bg-orange-500 py-1 px-3 text-white cursor-pointer active:bg-gray-900 select-none"
                >
                  -
                </span>
                {quantity}
                <span
                  onClick={increaseQuantityHandler}
                  className="bg-orange-500 py-1 px-3 text-white cursor-pointer active:bg-gray-900 select-none"
                >
                  +
                </span>
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold">
                Price: {currencyFormat(price)}
              </p>
              <p className="text-lg font-semibold">
                VAT: {currencyFormat(vat)}
              </p>
              <p className="text-lg pb-2 font-semibold">
                Delivery charge: {currencyFormat(deliveryCharge)}
              </p>
              <p className="text-2xl border-t-2 pt-1 text-orange-500 font-semibold">
                Subtotal: {currencyFormat(price + vat + deliveryCharge)}
              </p>
            </div>
            <div className="flex gap-5">
              <button className="bg-gray-100 py-2 px-4 rounded-full text-gray-900 font-semibold hover:bg-gray-900 hover:text-white">
                Go Back
              </button>
              <button className="bg-orange-500 py-2 px-4 rounded-full text-white font-semibold hover:bg-gray-900">
                Place Order
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Burger;

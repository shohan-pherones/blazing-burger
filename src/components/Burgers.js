import React from "react";
import { Link } from "react-router-dom";
import { burgers } from "./data.js";

const Burgers = () => {
  return (
    <section className="container mx-auto py-10">
      <h2 className="mb-10 text-4xl text-center font-semibold">Burgers</h2>
      <div className="burgers-wrapper flex gap-5 flex-wrap justify-center">
        {burgers.map((burger) => (
          <div
            className="burger overflow-hidden shadow-md rounded-md w-56"
            key={burger.id}
          >
            <div className="burger-img h-36 overflow-hidden">
              <img src={burger.img} alt={burger.title} />
            </div>
            <div className="burger-texts p-5 flex flex-col gap-2 items-start">
              <h2 className="text-xl font-semibold">{burger.title}</h2>
              <p className="text-xl text-orange-500 font-semibold">
                {burger.price.toLocaleString("bn-BD", {
                  style: "currency",
                  currency: "BDT",
                })}
              </p>
              <Link
                to={`/burger/${burger.id}`}
                className="bg-orange-500 py-2 px-5 rounded-full text-white  hover:bg-slate-900 mt-2 font-semibold"
              >
                Order Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Burgers;

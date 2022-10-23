import React from "react";

const Burger = ({ burgers }) => {
  return (
    <>
      {burgers.map((burger) => (
        <div
          className="burger overflow-hidden shadow-md rounded-md w-56"
          key={burger.id}
        >
          <div className="burger-img h-36 overflow-hidden">
            <img src={burger.img} alt={burger.title} />
          </div>
          <div className="burger-texts p-5 flex flex-col gap-2 items-start">
            <h2 className="text-xl">{burger.title}</h2>
            <p className="text-xl text-orange-500">
              {burger.price.toLocaleString("bn-BD", {
                style: "currency",
                currency: "BDT",
              })}
            </p>
            <a
              href="#"
              className="bg-orange-500 py-2 px-5 rounded-full text-white  hover:bg-slate-900 mt-2"
            >
              Order Now
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default Burger;

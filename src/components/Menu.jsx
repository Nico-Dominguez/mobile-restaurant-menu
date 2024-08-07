import React, { useState } from "react";
import Order from "./Order";
import Modal from "./Modal";

const Menu = () => {
  const [orderItems, setOrderItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOrderCompleted, setIsOrderCompleted] = useState(false);

  const menuArray = [
    {
      name: "Pizza",
      ingredients: ["pepperoni", "mushroom", "mozzarella"],
      id: 0,
      price: 14,
      emoji: "🍕",
    },
    {
      name: "Hamburger",
      ingredients: ["beef", "cheese", "lettuce"],
      price: 12,
      emoji: "🍔",
      id: 1,
    },
    {
      name: "Beer",
      ingredients: ["grain", "hops", "yeast", "water"],
      price: 12,
      emoji: "🍺",
      id: 2,
    },
  ];

  const addToOrder = (item) => {
    if (isOrderCompleted) resetOrder();
    setOrderItems((prevItems) => [...prevItems, item]);
  };

  const removeFromOrder = (id) => {
    setOrderItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const resetOrder = () => {
    setOrderItems([]);
    setIsOrderCompleted(false);
  };

  const MenuItem = ({ item }) => (
    <div className="flex items-center border-b-2 border-slate-50 p-4 hover:bg-slate-100 transition-colors">
      <h1 className="text-8xl mr-6">{item.emoji}</h1>
      <div className="flex-grow">
        <h1 className="text-3xl font-semibold">{item.name}</h1>
        <p className="text-gray-600">{item.ingredients.join(", ")}</p>
        <p className="text-2xl font-bold mt-2">${item.price}</p>
      </div>
      <button
        onClick={() => addToOrder(item)}
        className="flex items-center justify-center ml-auto h-16 w-16 rounded-full bg-violet-500 text-white text-4xl leading-none hover:bg-violet-600 transition-colors"
      >
        <span className="mb-1">+</span>
      </button>
    </div>
  );

  return (
    <div className="container mx-auto grid gap-12 w-3/4 py-12">
      <div className="grid gap-4">
        {menuArray.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>

      {isOrderCompleted ? (
        <div className="text-center p-8 bg-green-500 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-4">
            Thanks! Your order is on its way.
          </h2>
          <button
            onClick={resetOrder}
            className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-600 transition-colors"
          >
            Start New Order
          </button>
        </div>
      ) : (
        <>
          {orderItems.length > 0 && (
            <Order items={orderItems} removeItem={removeFromOrder} />
          )}

          {isModalOpen && (
            <Modal
              setIsModalOpen={setIsModalOpen}
              setIsOrderCompleted={setIsOrderCompleted}
            />
          )}

          {orderItems.length > 0 && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full p-4 rounded-full text-2xl font-semibold bg-violet-500 text-white hover:bg-violet-600 transition-colors"
            >
              Complete Order
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Menu;

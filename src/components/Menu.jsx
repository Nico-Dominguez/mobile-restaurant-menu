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
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center p-6">
        <div className="text-8xl mr-6">{item.emoji}</div>
        <div className="flex-grow">
          <h2 className="text-2xl font-bold">{item.name}</h2>
          <p className="text-gray-600 mb-2">{item.ingredients.join(", ")}</p>
          <p className="text-2xl font-bold">${item.price}</p>
        </div>
        <button
          onClick={() => addToOrder(item)}
          className="flex items-center justify-center ml-4 h-12 w-12 rounded-full bg-violet-500 text-white text-xl leading-none hover:bg-violet-600 transition-colors"
        >
          <span className="mb-0.5">+</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto grid grid-cols-1 xl:grid-cols-3 gap-6 py-12">
      {menuArray.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}

      {isOrderCompleted ? (
        <div className="col-span-1 sm:col-span-2 md:col-span-3 bg-green-500 rounded-lg shadow-lg p-8">
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
            <div className="col-span-1 sm:col-span-2 md:col-span-3">
              <Order items={orderItems} removeItem={removeFromOrder} />
            </div>
          )}

          {isModalOpen && (
            <Modal
              setIsModalOpen={setIsModalOpen}
              setIsOrderCompleted={setIsOrderCompleted}
            />
          )}

          {orderItems.length > 0 && (
            <div className="col-span-1 sm:col-span-2 md:col-span-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full py-4 rounded-full text-2xl font-semibold bg-violet-500 text-white hover:bg-violet-600 transition-colors"
              >
                Complete Order
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Menu;

import React from "react";

const Order = ({ items, removeItem }) => {
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container mx-auto grid gap-8">
      <h1 className="text-center text-6xl font-bold">Your Order</h1>

      {items.map((item) => (
        <div key={item.id} className="border-b-2 border-slate-50">
          <div className="flex gap-4 text-4xl py-8">
            <h1>{item.name}</h1>
            <button
              onClick={() => removeItem(item.id)}
              className="flex items-center justify-center bg-blue-500 rounded p-2 text-xl"
            >
              remove
            </button>
            <h2 className="ml-auto">${item.price}</h2>
          </div>
        </div>
      ))}

      <div className="flex text-4xl">
        <h1>Total Price:</h1>
        <h2 className="ml-auto">${totalPrice.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default Order;

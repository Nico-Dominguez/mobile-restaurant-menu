import React from "react";

const Order = ({ items, removeItem }) => {
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Your Order</h1>

      {items.map((item) => (
        <div key={item.id} className="border-b border-gray-200 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="text-6xl">{item.emoji}</div>
              <h2 className="text-2xl font-bold">{item.name}</h2>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => removeItem(item.id)}
                className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded-full transition-colors"
              >
                Remove
              </button>
              <p className="text-2xl font-bold">${item.price}</p>
            </div>
          </div>
        </div>
      ))}

      <div className="flex justify-between items-center mt-8 text-2xl font-bold">
        <h2>Total:</h2>
        <p>${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Order;

import React from "react";
const Coffees = ({ coffees }) => {
  const { name, supplier, taster, quantity, category, details, photoURL } =
    coffees || {};
  return (
    <div className="grid grid-cols-2 gap-5 max-w-6xl mx-auto  ">
      {coffees.map((coffee) => {
        return (
          <div className=" p-5 space-y-2 bg-gray-100 rounded-lg flex items-center space-x-12">
            <img src={coffee?.photoURL} alt="" />
            <div className="space-y-2">
              <h1>Name: {coffee?.name}</h1>
              <h1>Supplier: {coffee?.supplier}</h1>
              <h1>Taster: {coffee?.taster}</h1>
              <h1>Quantity: {coffee?.quantity}</h1>
              <h1>Category: {coffee?.category}</h1>
              <h1>Details: {coffee?.details}</h1>
            </div>
            <div>
              <h1>Eye</h1>
              <h1>Eye</h1>
              <h1>Delete</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Coffees;

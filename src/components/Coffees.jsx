import React from "react";
import { Link } from "react-router-dom";
const Coffees = ({ coffees }) => {
  const { name, supplier, taster, quantity, category, details, photoURL } =
    coffees || {};
  return (
    <div className="grid grid-cols-2 gap-5 max-w-6xl mx-auto  ">
      {coffees.map((coffee) => {
        return (
          <div
            key={coffee?._id}
            className=" p-5 space-y-2 bg-gray-100 rounded-lg flex items-center space-x-12 shadow-lg"
          >
            <div className="w-40">
              <img className="w-full h-full" src={coffee?.photoURL} alt="" />
            </div>
            <div className="space-y-2">
              <h1>
                <span className="font-semibold mr-2">Name</span>: {coffee?.name}
              </h1>
              <h1>
                <span className="font-semibold mr-2">Supplier</span>:{" "}
                {coffee?.supplier}
              </h1>
              <h1>
                <span className="font-semibold mr-2">Taster</span>:{" "}
                {coffee?.taster}
              </h1>
            </div>
            <div className="flex flex-col">
              <Link to={`/details/${coffee?._id}`} className="border-2 mt-1">
                DETAILS
              </Link>
              <Link className="border-2 mt-1">EDIT</Link>
              <Link className="border-2 mt-1">DELETE</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Coffees;

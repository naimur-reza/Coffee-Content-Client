import React from "react";
import { useLoaderData, Link, useNavigation } from "react-router-dom";
import nicetiles from "../assets/images/more/19.png";
const CoffeeDetails = () => {
  const loadedData = useLoaderData();
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return "loading";
  }
  const { name, supplier, taster, quantity, category, details, photoURL, _id } =
    loadedData || {};
  return (
    <>
      <div className="max-w-2xl mx-auto">
        <Link
          to={"/"}
          className="bg-yellow-900 block text-white p-2 rounded-lg mt-4"
        >
          Back to home
        </Link>
      </div>
      <div
        key={_id}
        className=" my-10 max-w-2xl mx-auto p-8 space-y-2 bg-gray-100 rounded-lg flex items-center justify-evenly shadow-lg"
      >
        <div className="w-40">
          <img className="w-full h-full" src={photoURL} alt="" />
        </div>
        <div className="space-y-2">
          <img className="w-20" src={nicetiles} alt="" />
          <h1>
            <span className="font-semibold mr-2">Name</span>: {name}
          </h1>
          <h1>
            <span className="font-semibold mr-2">Supplier</span>: {supplier}
          </h1>
          <h1>
            <span className="font-semibold mr-2">Taster</span>: {taster}
          </h1>
          <h1>
            <span className="font-semibold mr-2">Quantity</span>: {quantity}
          </h1>
          <h1>
            <span className="font-semibold mr-2">Category</span>: {category}
          </h1>
          <h1>
            <span className="font-semibold mr-2">Details</span>: {details}
          </h1>
        </div>
      </div>
    </>
  );
};

export default CoffeeDetails;

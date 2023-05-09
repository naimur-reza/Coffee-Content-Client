import React from "react";
import {
  useLoaderData,
  Link,
  useNavigation,
  ScrollRestoration,
} from "react-router-dom";
import nicetiles from "../assets/images/more/19.png";
import { FaArrowLeft } from "react-icons/fa";
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
      <ScrollRestoration />
      <div className="max-w-2xl mx-auto">
        <Link
          to={"/"}
          className="bg-yellow-900   bg-opacity-70 text-cen text-white px-4 py-2 shadow-lg s shadow-yellow-900 font-semibold rounded-lg mt-4 lg:mx-0 mx-5 inline-flex gap-2 items-center"
        >
          <FaArrowLeft /> Back to home
        </Link>
      </div>
      <div
        key={_id}
        className="mx-5 gap-5 my-10 max-w-2xl lg:mx-auto p-8 space-y-2 bg-gray-100 rounded-lg flex items-center justify-evenly shadow-lg"
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

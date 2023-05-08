import React from "react";
import Feature from "../components/Feature";
import { Link, useLoaderData } from "react-router-dom";
import Coffees from "../components/Coffees";
import { FaCoffee } from "react-icons/fa";
import Follow from "../components/Follow";

const Home = () => {
  const coffees = useLoaderData();
  console.log(coffees);
  return (
    <>
      <div className="bg-[url('../../src/assets/images/more/3.png')] flex items-center justify-center h-[calc(100vh-40px)] object-cover w-full  px-20 bg-no-repeat bg-cover">
        <div className="space-y-3 max-w-xl ms-auto">
          <h1 className="text-white text-5xl font-semibold">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className="text-white text-xl">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="text-white  ">Learn More</button>
        </div>
      </div>
      <Feature />
      <div className="text-center py-10 space-y-4">
        <img
          className="absolute -z-50"
          src="../src/assets/images/more/1.png"
          alt=""
        />
        <h1 className="text-3xl font-semibold">Our Popular Products</h1>
        <Link
          className="font-bold  border-2 border-black bg-opacity-70 bg-yellow-800 text-white px-4 py-2  rounded-lg inline-flex items-center gap-2"
          to={"/addCoffee"}
        >
          Add coffee
          <FaCoffee />
        </Link>
      </div>

      <Coffees coffees={coffees} />
      <Follow />
    </>
  );
};

export default Home;

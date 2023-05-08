import React from "react";
import Feature from "../components/Feature";
import { Link, useLoaderData } from "react-router-dom";
import Coffees from "../components/Coffees";
const Home = () => {
  const coffees = useLoaderData();
  console.log(coffees);
  return (
    <>
      <div className="bg-[url('../../src/assets/images/more/3.png')] flex items-center justify-center h-[calc(100vh-84px)] object-cover w-full object-top px-20">
        <div className="space-y-3 max-w-xl ms-auto">
          <h1 className="text-white text-5xl font-semibold">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className="text-white">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="text-white border-2 ">Learn More</button>
        </div>
      </div>
      <Feature />
      <Link to={"/addCoffee"}>Add coffee</Link>
      <Coffees coffees={coffees} />
    </>
  );
};

export default Home;

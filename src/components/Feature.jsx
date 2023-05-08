import React from "react";
import bg1 from "../assets/images/icons/1.png";
import bg2 from "../assets/images/icons/2.png";
import bg3 from "../assets/images/icons/3.png";
import bg4 from "../assets/images/icons/4.png";
const Feature = () => {
  return (
    <div className="bg-[#ECEAE3]  ">
      <div className="max-w-4xl p-5 mx-auto justify-center flex lg:flex-row flex-col">
        <div className="space-y-3">
          <img className="" src={bg1} alt="" />
          <h1 className="text-lg font-semibold">Awesome Aroma</h1>
          <p>
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div className="space-y-3">
          <img className="" src={bg2} alt="" />
          <h1 className="text-lg font-semibold">High Quality</h1>
          <p>We served the coffee to you maintaining the best quality</p>
        </div>
        <div className="space-y-3">
          <img className="" src={bg3} alt="" />
          <h1 className="text-lg font-semibold">Pure Grades</h1>
          <p>
            The coffee is made of the green coffee beans which you will love
          </p>
        </div>
        <div className="space-y-3">
          <img className="" src={bg4} alt="" />
          <h1 className="text-lg font-semibold">Proper Roasting</h1>
          <p>Your coffee is brewed by first roasting the green coffee beans</p>
        </div>
      </div>
    </div>
  );
};

export default Feature;

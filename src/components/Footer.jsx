import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[url('../../src/assets/images/more/10.png')]  mt-10 p-10 flex justify-evenly lg:items-center flex-col lg:flex-row space-y-3">
      <div className="space-y-3">
        <img
          className="w-20"
          src="../../src/assets/images/more/logo1.png"
          alt=""
        />
        <h1 className="text-2xl font-semibold t">Espresso Emporium</h1>
        <p className="w-96">
          Always ready to be your friend. Come & Contact with us to share your
          memorable moments, to share with your best companion.
        </p>
        <div className="flex gap-2">
          <FaGithub />
          <FaGoogle />
          <FaFacebook />
        </div>
        <h1 className="text-2xl font-semibold text-gray-700">Get In Touch</h1>
        <p>
          <span className="inline-flex items-center gap-2">
            <FaPhone />
            :+669-101-010
          </span>
        </p>
        <p>
          <span className="inline-flex items-center gap-2">
            <FaEnvelope />
            :+669-101-010
          </span>
        </p>
      </div>
      <div className="flex flex-col space-y-3">
        <h1 className="text-2xl font-semibold text-gray-700">
          Connect With Us
        </h1>
        <input
          className="px-3 py-2 rounded-lg"
          type="text"
          name="name"
          placeholder="Name"
          id=""
        />
        <input
          className="px-3 py-2 rounded-lg"
          type="text"
          name="email"
          placeholder="Email"
          id=""
        />
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <input
          className="bg-yellow-800 text-white  py-2 rounded-lg font-semibold"
          type="submit"
          value={"Send Message"}
        />
      </div>
    </div>
  );
};

export default Footer;

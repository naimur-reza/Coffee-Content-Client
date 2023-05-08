import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
const Main = () => {
  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-84px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;

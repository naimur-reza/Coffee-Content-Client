import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaEye, FaPen, FaTrash } from "react-icons/fa";
const Coffees = ({ coffees }) => {
  const { name, supplier, taster, quantity, category, details, photoURL } =
    coffees || {};
  const [useCoffees, setUseCoffees] = useState(coffees);
  // delete operation
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffe-store-server.vercel.app/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            const remaining = useCoffees.filter((coffee) => coffee._id !== id);
            setUseCoffees(remaining);
            Swal.fire("Deleted!", "Your coffee has been deleted.", "success");
            console.log(data);
          });
      }
    });
  };
  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 max-w-6xl mx-auto  p-2">
        {useCoffees.map((coffee) => {
          return (
            <div
              key={coffee?._id}
              className=" p-5 space-y-2 lg:h-[290px] lg:w-[550px] bg-gray-100 rounded-lg justify-between flex items-center space-x-12 shadow-lg"
            >
              <div className="  flex items-center gap-5">
                <div className="lg:w-40 w-32 ">
                  <img
                    className="w-full h-full hover:scale-110 transition-all"
                    src={coffee?.photoURL}
                    alt=""
                  />
                </div>
                <div className="space-y-2 ">
                  <h1>
                    <span className="font-semibold mr-2">Name</span>:{" "}
                    {coffee?.name}
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
              </div>
              <div className="flex flex-col">
                <Link
                  to={`/details/${coffee?._id}`}
                  className=" mt-1 px-3 py-2 bg-gray-500 text-white rounded-lg cursor-pointer"
                >
                  <FaEye />
                </Link>
                <Link
                  to={`update/${coffee?._id}`}
                  className=" mt-1 px-3 py-2 bg-black text-white rounded-lg cursor-pointer"
                >
                  <FaPen />
                </Link>
                <Link
                  onClick={() => handleDelete(coffee._id)}
                  className=" mt-1 px-3 py-2 bg-red-500 text-white rounded-lg cursor-pointer"
                >
                  <FaTrash />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Coffees;

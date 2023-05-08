import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
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
        fetch(`http://localhost:5000/coffee/${id}`, {
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
    <div className="grid grid-cols-2 gap-5 max-w-6xl mx-auto  ">
      {useCoffees.map((coffee) => {
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
              <Link to={`update/${coffee?._id}`} className="border-2 mt-1">
                EDIT
              </Link>
              <Link
                onClick={() => handleDelete(coffee._id)}
                className="border-2 mt-1"
              >
                DELETE
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Coffees;

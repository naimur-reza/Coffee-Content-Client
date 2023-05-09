import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useLoaderData, useNavigation, Link } from "react-router-dom";
import Swal from "sweetalert2";
const Update = () => {
  const navigate = useNavigation();
  if (navigate.state === "loading") {
    return "Loading";
  }
  const loadedData = useLoaderData();
  const { name, supplier, taster, quantity, category, details, photoURL, _id } =
    loadedData || {};
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const supplier = form.supplier.value;
    const taster = form.taster.value;
    const quantity = form.quantity.value;
    const category = form.category.value;
    const details = form.details.value;
    const photoURL = form.photoURL.value;
    const updatedCoffee = {
      name,
      supplier,
      taster,
      quantity,
      category,
      details,
      photoURL,
    };
    fetch(`https://coffe-store-server.vercel.app/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="bg-[#F4F3F0] lg:px-24 py-10">
      <Link
        to={"/"}
        className="bg-yellow-900   bg-opacity-70 text-cen text-white px-4 py-2 shadow-lg s shadow-yellow-900 font-semibold rounded-lg mt-2 lg:mx-0 mx-5 inline-flex gap-2 items-center"
      >
        <FaArrowLeft /> Back to home
      </Link>
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-semibold text-gray-700">Update Coffee</h1>
        <p className="tracking-wide lg:px-20 px-7">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>

      <form className="p-5 lg:p-0" onSubmit={handleUpdate}>
        {/* form name and quantity row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Coffee Name"
                className="input input-bordered w-full rounded"
                defaultValue={name}
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 lg:ml-4">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="quantity"
                placeholder="Available Quantity"
                className="input input-bordered w-full"
                defaultValue={quantity}
              />
            </label>
          </div>
        </div>
        {/* form supplier row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="supplier"
                placeholder="Supplier Name"
                className="input input-bordered w-full"
                defaultValue={supplier}
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 lg:ml-4">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="taster"
                placeholder="Taste"
                className="input input-bordered w-full"
                defaultValue={taster}
              />
            </label>
          </div>
        </div>
        {/* form category and details row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                placeholder="Category"
                className="input input-bordered w-full"
                defaultValue={category}
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 lg:ml-4">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                placeholder="Details"
                className="input input-bordered w-full"
                defaultValue={details}
              />
            </label>
          </div>
        </div>
        {/* form Photo url row */}
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photoURL"
                placeholder="Photo URL"
                className="input input-bordered w-full"
                defaultValue={photoURL}
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Update Coffee"
          className=" btn-block bg-orange-900 py-3 rounded-lg text-white hover:bg-orange-950 font-semibold"
        />
      </form>
    </div>
  );
};

export default Update;

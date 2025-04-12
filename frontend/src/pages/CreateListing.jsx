import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CreateListing = () => {
  // const location = useLocation();
  // const list = location.state?.list;
  const { isLoggedIn} = useSelector((state) => state.auth);
  // const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [form, setForm] = useState({
    title: '',
    description: '',
    price: '',
    location: '',
    country: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data:", form);
  
    if (!isLoggedIn) {
      alert("Please log in to submit the application.");
      return;
    }
  
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("price", form.price);
    formData.append("location", form.location);
    formData.append("country", form.country);
    formData.append("image", form.image);
  
    try {
      const response = await fetch("http://localhost:8080/listings", {
        method: "POST",
        body: formData,
        credentials: "include", // this sends cookies if needed
      });
  
      const result = await response.json();
  
      if (response.ok) {
        alert("Listing created successfully!");
        // Optional: redirect or reset form
      } else {
        alert("Error: " + result.error || result.message);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-[#1f1f1f] mb-8">Create a New Listing</h2>
      
      {isLoggedIn ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Enter title"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2f54eb]"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Enter description"
              className="w-full border border-gray-300 rounded px-4 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-[#2f54eb]"
              required
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Upload Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-[#2f54eb] file:text-white hover:file:bg-[#1d39c4]"
              required
            />
          </div>

          {/* Price and Country */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Price</label>
              <input
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
                placeholder="Enter price"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2f54eb]"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Country</label>
              <input
                type="text"
                name="country"
                value={form.country}
                onChange={handleChange}
                placeholder="Enter country"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2f54eb]"
                required
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Location</label>
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Enter location"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2f54eb]"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#ff4d4f] hover:bg-[#d9363e] text-white font-semibold px-6 py-2 rounded transition"
            >
              Add Listing
            </button>
          </div>
        </form>
      ) : (
        <div className="text-center text-red-600 font-semibold mt-6">
          Please log in to create a new listing.
        </div>
      )}
    </div>
  );
};

export default CreateListing;

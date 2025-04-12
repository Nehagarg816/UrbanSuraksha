import React, { useState, useEffect } from 'react';
import '../styles/CreateListing.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CreateListing = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    location: '',
    country: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      alert("Please log in to submit the application.");
      return;
    }

    const form = new FormData();
    form.append("title", formData.title);
    form.append("description", formData.description);
    form.append("price", formData.price);
    form.append("location", formData.location);
    form.append("country", formData.country);
    form.append("image", formData.image);

    try {
      const response = await fetch("http://localhost:8080/listings", {
        method: "POST",
        body: form,
        credentials: "include",
      });

      const result = await response.json();

      if (response.ok) {
        alert("Listing created successfully!");
        navigate('/'); // Redirect to homepage

        // Optional: Reset the form
        // setFormData({
        //   title: '',
        //   description: '',
        //   price: '',
        //   location: '',
        //   country: '',
        //   image: null,
        // });
      } else {
        alert("Error: " + (result.error || result.message));
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="create-listing-container">
        <h2 className="text-3xl font-bold text-[#1f1f1f] mb-8">Create a New Listing</h2>
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Title */}
          <div>
            <label className="block text-[#1f1f1f] font-medium mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter title"
              className="w-full border border-[#d9d9d9] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2f54eb]"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-[#1f1f1f] font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter description"
              className="w-full border border-[#d9d9d9] rounded px-4 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-[#2f54eb]"
              required
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-[#1f1f1f] font-medium mb-1">Upload Image</label>
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
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-[#1f1f1f] font-medium mb-1">Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Enter price"
                className="w-full border border-[#d9d9d9] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2f54eb]"
                required
              />
            </div>

            <div className="flex-1">
              <label className="block text-[#1f1f1f] font-medium mb-1">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Enter country"
                className="w-full border border-[#d9d9d9] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2f54eb]"
                required
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-[#1f1f1f] font-medium mb-1">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter location"
              className="w-full border border-[#d9d9d9] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2f54eb]"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#ff4d4f] hover:bg-[#d9363e] text-white font-semibold px-6 py-2 rounded transition"
          >
            Add Listing
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default CreateListing;

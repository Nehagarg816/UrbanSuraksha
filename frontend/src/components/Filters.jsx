import React from "react";
import {
  BedDouble,
  Building,
  Mountain,
  Tent,
  ShieldCheck,
  Leaf,
  Soup,
  MapPin,
} from "lucide-react";

const categories = [
  { name: "Rooms", icon: <BedDouble size={20} /> },
  { name: "Buildings", icon: <Building size={20} /> },
  { name: "Hills", icon: <Mountain size={20} /> },
  { name: "Camping", icon: <Tent size={20} /> },
  { name: "Safe PGs", icon: <ShieldCheck size={20} /> },
  { name: "Green Zones", icon: <Leaf size={20} /> },
  { name: "Tiffin", icon: <Soup size={20} /> },
  { name: "Nearby", icon: <MapPin size={20} /> },
];

const Filters = () => {
  return (
    <div className="w-full bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
        {/* Icons and Search Bar in One Row */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          
          {/* Category Filters (left side) */}
          <div className="flex gap-6 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="flex flex-col items-center text-gray-600 hover:text-pink-600 transition text-sm cursor-pointer"
              >
                {cat.icon}
                <span className="mt-1">{cat.name}</span>
              </div>
            ))}
          </div>

          {/* Search bar (right side) */}
          <div className="w-full sm:w-auto md:w-[400px]">
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 shadow-inner">
              <input
                type="text"
                placeholder="Search PG, location, or service..."
                className="bg-transparent outline-none flex-1 text-sm"
              />
              <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-1.5 rounded-full ml-2 text-sm cursor-pointer">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;

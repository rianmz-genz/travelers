import Back from "@/Components/Back";
import TravelCard from "@/Components/Card/TravelCard";
import Each from "@/Components/Each";
import { Link } from "@inertiajs/react";
import React from "react";
import { FiChevronLeft } from "react-icons/fi";

const AllTravels = ({ travels, message }) => {
  return (
    <div className="w-full min-h-screen bg-white py-12 text-black px-7">
      <div className="max-w-7xl mx-auto lg:px-8">
        <Back />
        <h1 className="text-2xl font-bold">Travel</h1>
        <p>{message}</p>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 mt-6 gap-3">
          <Each
            of={travels.data}
            render={(travel, index) => (
              <TravelCard
                key={index}
                rating={travel.rating}
                rating_count={travel.rating_count}
                src={travel.thumbnail}
                id={travel.id}
                title={travel.title}
                price={travel.price}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default AllTravels;

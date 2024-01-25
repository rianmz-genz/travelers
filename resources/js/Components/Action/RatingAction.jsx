import React, { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa6";

const RatingAction = ({rating, setRating}) => {

  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaRegStar
          key={i}
          style={{ color: "#f9c32f", cursor: "pointer" }}
          onClick={() => handleStarClick(i)}
        />
      );
    }

    for (let i = 1; i <= rating; i++) {
      stars[i - 1] = (
        <FaStar
          key={i}
          style={{ color: "#f9c32f", cursor: "pointer" }}
          onClick={() => handleStarClick(i)}
        />
      );
    }

    return stars;
  };

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <div className="flex gap-1 items-center justify-center w-fit">
      {renderStars()}
      <p className="text-yellow-500"> {rating}/5</p>
    </div>
  );
};

export default RatingAction;

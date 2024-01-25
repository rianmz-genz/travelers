import React from "react";
import { FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";

const Rating = ({ rating, rating_count }) => {
  const renderStars = () => {
    const stars = [];
    let remainingRating = rating;

    for (let i = 0; i < 5; i++) {
      if (remainingRating >= 1) {
        stars.push(<FaStar key={i} style={{ color: "#f9c32f" }} />);
      } else if (remainingRating >= 0.5) {
        stars.push(
          <FaRegStarHalfStroke key={i} style={{ color: "#f9c32f" }} />
        );
      } else {
        stars.push(<FaRegStar key={i} style={{ color: "#f9c32f" }} />);
      }

      remainingRating -= 1;
    }

    return stars;
  };

  return (
    <div className="flex gap-1 items-center justify-center w-fit">
      {renderStars()}
      <p className="text-yellow-500">- {rating}/5</p>
      {rating_count && <p className="font-bold text-sm">({rating_count})</p>}
    </div>
  );
};

export default Rating;

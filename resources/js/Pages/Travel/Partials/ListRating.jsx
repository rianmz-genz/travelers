import Each from "@/Components/Each";
import Rating from "@/Components/Home/Hero/Rating";
import SkeletonRating from "@/Components/SkeletonRating";
import React, { useState } from "react";

const ListRating = ({ ratings }) => {
  const [visibleCount, setVisibleCount] = useState(5);
  const [isLoading, setIsLoading] = useState(false);

  const handleShowMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount((prevCount) => prevCount + 5);
      setIsLoading(false);
    }, 500);
  };

  const renderedRatings = ratings.slice(0, visibleCount);
  return (
    <div className="w-9/12 mx-auto">
      {renderedRatings.length === 0 ? (
        <p className="text-center">Belum ada review</p>
      ) : (
        <>
          {/* Render the first 5 ratings */}
          {renderedRatings.map((rating) => (
            <div
              key={rating.id}
              className="bg-white shadow w-full px-4 py-2 mb-3 rounded-lg text-black"
            >
              <div className="flex items-center justify-between">
                <p>
                  <Rating rating={rating.rating} />
                </p>
                <p>{rating.name}</p>
              </div>
              <div>
                <p>{rating.comment}</p>
                <div className="flex flex-wrap gap-2">
                  <Each
                    of={rating.images}
                    render={(image) => (
                      <a href={image} target="_blank">
                        <img src={image} className="rounded-md w-28" />
                      </a>
                    )}
                  />
                </div>
              </div>
            </div>
          ))}

          {isLoading && <SkeletonRating />}
          {visibleCount < ratings.length && (
            <button onClick={handleShowMore} className="mx-auto">
              {isLoading ? "..." : "Tampilkan Lainnya"}
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default ListRating;

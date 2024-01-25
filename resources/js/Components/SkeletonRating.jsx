import React from "react";

const SkeletonRating = () => {
  return (
    <div className="w-full bg-neutral/10 rounded-lg animate-pulse h-24 p-3">
      <div className="flex justify-between items-center">
        <div className="w-28 h-3 rounded-full animate-pulse bg-neutral/20"></div>
        <div className="w-12 h-3 rounded-full animate-pulse bg-neutral/20"></div>
      </div>
      <div className="animate-pulse bg-neutral/20 w-full h-12 mt-2 rounded-lg"></div>
    </div>
  );
};

export default SkeletonRating;

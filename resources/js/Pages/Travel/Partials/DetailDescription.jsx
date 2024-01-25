import React from "react";

const DetailDescription = ({ description }) => {
  return (
    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
      <div className="p-6 text-gray-900">{description}</div>
    </div>
  );
};

export default DetailDescription;

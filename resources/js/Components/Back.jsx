import React from "react";
import { FiChevronLeft } from "react-icons/fi";

const Back = () => {
  const goBack = () => {
    // Use Inertia's visit function to navigate to the previous page
    window.history.back();
  };

  return (
    <button
      className="flex items-center justify-center w-fit text-black gap-2 mb-4"
      onClick={goBack}
    >
      <FiChevronLeft />
      <p>Beranda</p>
    </button>
  );
};

export default Back;

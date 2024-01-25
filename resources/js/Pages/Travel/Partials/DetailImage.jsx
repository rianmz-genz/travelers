import Each from "@/Components/Each";
import React from "react";

const DetailImage = ({ thumbnail, images }) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-5 my-6 gap-2">
      <a href={thumbnail} target="_blank" className="col-span-3 row-span-3 ">
        <img src={thumbnail} className="rounded-lg" />
      </a>
      <Each
        of={images.slice(0, 6)}
        render={(image, index) => (
          <a href={image} target="_blank" key={index}>
            <img src={image} alt={image} className=" rounded-lg" />
          </a>
        )}
      />
    </div>
  );
};

export default DetailImage;

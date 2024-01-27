import Each from "@/Components/Each";
import React from "react";

const DetailImage = ({ thumbnail, images }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 my-6 gap-2">
      <a href={thumbnail} target="_blank" className="col-span-3 row-span-3 ">
        <img src={thumbnail} className="rounded-lg object-cover w-full" />
      </a>
      <Each
        of={images.slice(0, 6)}
        render={(image, index) => (
          <a href={image} target="_blank" key={index}>
            <img
              src={image}
              alt={image}
              className=" rounded-lg object-cover w-full"
            />
          </a>
        )}
      />
    </div>
  );
};

export default DetailImage;

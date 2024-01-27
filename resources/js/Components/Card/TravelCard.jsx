import React from "react";
import Rating from "../Home/Hero/Rating";
import { Link } from "@inertiajs/react";

function TravelCard({ src, title, rating, rating_count, id, price }) {
  return (
    <Link href={route("travel.detail", id)}>
      <div className="w-full rounded-lg overflow-hidden shadow">
        <img src={src} alt={title} />
        <div className="p-4 bg-white ">
          <p className="font-bold text-lg">{title}</p>
          <Rating rating={rating} rating_count={rating_count} />
          <p>Rp. {price.toLocaleString('id-ID')}</p>
        </div>
      </div>
    </Link>
  );
}

export default TravelCard;

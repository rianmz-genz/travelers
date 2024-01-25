import InputTitle from "@/Components/InputTitle";
import PrimaryButton from "@/Components/PrimaryButton";
import TextareaTitle from "@/Components/TextareaTitle";
import React, { useEffect, useState } from "react";
import { FiPlus, FiPlusCircle, FiTrash } from "react-icons/fi";
import CreateRatingForm from "./CreateRatingForm";
import ListRating from "./ListRating";
import { router } from "@inertiajs/react";
import { FaStar } from "react-icons/fa6";
import Each from "@/Components/Each";

const DetailRating = ({ travelId, ratings, isSuccess, rating }) => {
  const [isCreateMode, setIsCreateMode] = useState(false);
  const totalFiveStar = ratings.filter((rating) => rating.rating === 5).length;
  const totalFourStar = ratings.filter((rating) => rating.rating === 4).length;
  const totalTreeStar = ratings.filter((rating) => rating.rating === 3).length;
  const totalTwoStar = ratings.filter((rating) => rating.rating === 2).length;
  const totalOneStar = ratings.filter((rating) => rating.rating === 1).length;
  const totalData = ratings.length;
  async function onSubmit(e) {
    e.preventDefault();
    router.post("/ratings", new FormData(e.target));
    setTimeout(() => {
      setIsCreateMode(false);
    }, 500);
  }
  // console.log((totalFiveStar / totalData) * 100);
  const generatePercent = () => {
    return {
      FiveStarPercent: `${(totalFiveStar / totalData) * 100}%`,
      FourStarPercent: `${(totalFourStar / totalData) * 100}%`,
      TreeStarPercent: `${(totalTreeStar / totalData) * 100}%`,
      TwoStarPercent: `${(totalTwoStar / totalData) * 100}%`,
      OneStarPercent: `${(totalOneStar / totalData) * 100}%`,
    };
  };

  const {
    FiveStarPercent,
    FourStarPercent,
    TreeStarPercent,
    OneStarPercent,
    TwoStarPercent,
  } = generatePercent();

  const stars = [
    {
      label: "5",
      percent: FiveStarPercent,
      totalData: totalFiveStar,
    },
    {
      label: "4",
      percent: FourStarPercent,
      totalData: totalFourStar,
    },
    {
      label: "3",
      percent: TreeStarPercent,
      totalData: totalTreeStar,
    },
    {
      label: "2",
      percent: OneStarPercent,
      totalData: totalTwoStar,
    },
    {
      label: "1",
      percent: TwoStarPercent,
      totalData: totalOneStar,
    },
  ];
  return (
    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
      <div className="p-6 relative">
        {!isSuccess && (
          <PrimaryButton
            onClick={() => setIsCreateMode((prev) => !prev)}
            className="absolute top-2 right-2"
          >
            {isCreateMode ? "Batalkan" : "Buat Review"}
          </PrimaryButton>
        )}
        <div className="flex w-9/12 mx-auto items-start justify-between mb-6">
          <div className=" w-6/12">
            <div className="flex items-end justify-start">
              <h1 className="text-5xl font-bold text-black">4.9</h1>
              <p>/5</p>
            </div>
            <div className="flex gap-2 items-center mt-3">
              <FaStar style={{ color: "#f9c32f", fontSize: "1.3rem" }} />
              <FaStar style={{ color: "#f9c32f", fontSize: "1.3rem" }} />
              <FaStar style={{ color: "#f9c32f", fontSize: "1.3rem" }} />
              <FaStar style={{ color: "#f9c32f", fontSize: "1.3rem" }} />
              <FaStar style={{ color: "#f9c32f", fontSize: "1.3rem" }} />
            </div>
          </div>

          <div className="w-6/12">
            <Each
              of={stars}
              render={(star, index) => (
                <div key={index} className="mb-1">
                  <RatingItem
                    label={star.label}
                    percent={star.percent}
                    totalData={star.totalData}
                  />
                </div>
              )}
            />
          </div>
        </div>
        {isCreateMode ? (
          <CreateRatingForm travelId={travelId} onSubmit={onSubmit} />
        ) : (
          <ListRating ratings={ratings} />
        )}
      </div>
    </div>
  );
};

export default DetailRating;

function RatingItem({ percent, totalData, label }) {
  return (
    <div className="flex gap-1 items-center">
      <p>{label}</p>
      <FaStar style={{ color: "#f9c32f", fontSize: "1rem" }} />
      <div className="w-full h-2 bg-slate-100 rounded-full relative overflow-hidden">
        <div style={{ width: percent }} className={`h-2 bg-yellow-300`}></div>
      </div>
      <p>({totalData})</p>
    </div>
  );
}

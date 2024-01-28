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
  const [errorModal, setErrorModal] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  useEffect(() => {
    // Check if there are error messages, and show the error modal automatically
    if (errorMessages.length > 0) {
      setErrorModal(true);
    }
  }, [errorMessages]);
  async function onSubmit(e) {
    e.preventDefault();
    const result = await fetch("/api/ratings", {
      method: "POST",
      body: new FormData(e.target),
    });
    if (result.ok) {
      window.location.reload();
    } else {
      const data = await result.json();
      console.log(data.messages);
      const formattedErrorMessages = Object.entries(data.messages).flat();
      setErrorMessages(formattedErrorMessages || []);
    }
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
      <input
        type="checkbox"
        id="error_modal2"
        className="modal-toggle"
        checked={errorModal}
      />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Error!</h3>
          {errorMessages.map((message, index) => (
            <div key={index} className="py-2">
              {message}
            </div>
          ))}
          <div className="modal-action">
            <label
              htmlFor="error_modal2"
              className="btn"
              onClick={() => setErrorModal(false)}
            >
              Close
            </label>
          </div>
        </div>
      </div>
      <div className=" px-4 py-12 md:p-6 relative">
        {!isSuccess && (
          <PrimaryButton
            onClick={() => setIsCreateMode((prev) => !prev)}
            className="absolute top-2 right-2"
          >
            {isCreateMode ? "Batalkan" : "Buat Review"}
          </PrimaryButton>
        )}

        {isCreateMode ? (
          <CreateRatingForm travelId={travelId} onSubmit={onSubmit} />
        ) : (
          <>
            <div className="flex md:w-9/12 mx-auto items-start justify-between mb-6">
              <div className=" w-6/12">
                <div className="flex items-end justify-start">
                  <h1 className="md:text-5xl text-4xl font-bold text-black">
                    4.9
                  </h1>
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
            <ListRating ratings={ratings} />
          </>
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
      <p className="text-xs md:text-base">({totalData})</p>
    </div>
  );
}

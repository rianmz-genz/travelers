import Each from "@/Components/Each";
import Rating from "@/Components/Home/Hero/Rating";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { FiChevronLeft, FiMap, FiMapPin } from "react-icons/fi";
import DetailDescription from "./Partials/DetailDescription";
import DetailRating from "./Partials/DetailRating";
import DetailImage from "./Partials/DetailImage";
import DetailTab from "./Partials/DetailTab";

const Detail = ({ travel, errors }) => {
  const { data } = travel;
  const fullAddress = `${data.address}, ${data.ward}, ${data.subdistrict}, ${data.regency}`;
  const [activeTab, setActiveTab] = useState({
    label: "Deskripsi",
    render: <DetailDescription description={data.description} />,
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const tabs = [
    {
      label: "Deskripsi",
      render: <DetailDescription description={data.description} />,
    },
    {
      label: "Review",
      render: (
        <DetailRating
          rating={data.rating}
          rating_count={data.rating_count}
          travelId={data.id}
          ratings={data.ratings ?? []}
          isSuccess={isSuccess}
        />
      ),
    },
  ];
  useEffect(() => {
    if (errors.success) {
      alert(errors.success[0]);
      setIsSuccess(true);
    }
  }, [errors]);
  return (
    <div className="w-full min-h-screen bg-[#F7F9FA] top-0">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-8">
        <Link
          className="flex items-center justify-center w-fit text-black gap-2"
          href="/"
        >
          <FiChevronLeft />
          <p>Beranda</p>
        </Link>

        <article className="w-full mt-6">
          <div className="w-full flex justify-between items-center">
            <div className="space-y-2">
              <h1 className="text-black font-bold text-2xl">{data.title}</h1>
              <div className="flex items-center gap-3">
                <Rating rating={data.rating} rating_count={data.rating_count} />
                <div className="flex items-center gap-2 text-black/70">
                  <FiMapPin />
                  <p>{fullAddress}</p>
                </div>
              </div>
            </div>

            <div>
              <PrimaryButton>PESAN</PrimaryButton>
            </div>
          </div>
          <DetailImage thumbnail={data.thumbnail} images={data.images} />
          <DetailTab
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            tabs={tabs}
          />
          {activeTab.render}
        </article>
      </div>
    </div>
  );
};

export default Detail;

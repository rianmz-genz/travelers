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
import WhatsappButton from "@/Components/WhatsappButton";
import InputTitle from "@/Components/InputTitle";
import Back from "@/Components/Back";
import usePhone from "@/Hooks/usePhone";

const Detail = ({ travel, errors }) => {
  console.log(travel);
  const { data } = travel;
  const fullAddress = `${data.address}, ${data.ward}, ${data.subdistrict}, ${data.regency}`;
  const [activeTab, setActiveTab] = useState({
    label: "Deskripsi",
    render: <DetailDescription description={data.description} />,
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [people, setPeople] = useState(0);
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
  const { phone } = usePhone();

  useEffect(() => {
    if (errors.success) {
      alert(errors.success[0]);
      setIsSuccess(true);
    }
  }, [errors]);
  return (
    <div className="w-full min-h-screen bg-[#F7F9FA] top-0">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-8">
        <Back />

        <article className="w-full mt-6 px-7">
          <div className="w-full flex md:justify-between items-center md:items-center md:flex-row flex-col justify-start">
            <div className="space-y-2">
              <h1 className="text-black font-bold text-2xl text-center md:text-start">
                {data.title}
              </h1>
              <div className="flex items-center gap-3 md:flex-row flex-col justify-center">
                <Rating rating={data.rating} rating_count={data.rating_count} />
                <div className="flex items-center gap-2 text-black/70 justify-center">
                  <FiMapPin />
                  <p>{fullAddress}</p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-fit md:mt-0 mt-3 flex flex-col text-black items-center justify-center">
              <p>Rp. {data.price.toLocaleString("id-ID")}</p>
              {/* <PrimaryButton className="w-full md:w-fit">PESAN</PrimaryButton> */}
              {/* <WhatsappButton whatsappNumber={"088227852900"}>
                PESAN
              </WhatsappButton> */}
              {/* You can open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="btn w-full md:w-fit"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Pesan
              </button>
              <dialog
                id="my_modal_3"
                className="modal text-black backdrop-blur-md"
              >
                <div className="modal-box bg-white">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <h3 className="font-bold text-lg">Pesan Paket Ini</h3>
                  <div className="mt-2 mb-6">
                    <InputTitle
                      label={"Jumlah Orang"}
                      onChange={(e) => setPeople(e.target.value)}
                      value={people}
                      placeholder={"Masukan jumlah orang"}
                      type={"number"}
                    />
                  </div>
                  <WhatsappButton
                    travel={data}
                    whatsappNumber={phone}
                    people={people}
                  >
                    PESAN
                  </WhatsappButton>
                </div>
              </dialog>
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

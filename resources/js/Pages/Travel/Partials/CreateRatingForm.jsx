import RatingAction from "@/Components/Action/RatingAction";
import InputLabel from "@/Components/InputLabel";
import InputTitle from "@/Components/InputTitle";
import PrimaryButton from "@/Components/PrimaryButton";
import TextareaTitle from "@/Components/TextareaTitle";
import React, { useState } from "react";
import { FiPlusCircle, FiTrash } from "react-icons/fi";

const CreateRatingForm = ({ onSubmit, travelId }) => {
  const [images, setImages] = useState([1]);
  const [rating, setRating] = useState(0);

  const addImage = () => {
    setImages([...images, images.length + 1]);
  };
  const removeImage = (i) => {
    if (images.length == 1) return;
    setImages(images.filter((_, index) => index !== i));
  };
  return (
    <form onSubmit={onSubmit} className="py-8">
      <input type="hidden" value={travelId} name="travel_id" />
      <h1 className="absolute top-0 left-0 bg-neutral text-white px-4 py-2 rounded-br-lg">
        Buat Review
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <InputTitle
          label={"Nama"}
          name={"name"}
          placeholder={"Masukan nama Anda"}
        />
        <div>
          <InputLabel htmlFor={"rating"} value={"Rating*"} />
          <RatingAction rating={rating} setRating={setRating} />
          <input type="hidden" value={rating} name="rating" />
        </div>
        <TextareaTitle
          label={"Komentar*"}
          name={"comment"}
          placeholder={"Masukan komentar Anda"}
          required
        />
      </div>
      <div className="flex flex-wrap items-center justify-start gap-2 mb-3">
        {images.map((_, index) => (
          <div className="flex justify-center items-center w-fit my-2">
            <InputTitle
              key={index}
              name={`images[${index}]`}
              type={"file"}
              label={"Gambar " + (index + 1) + "*"}
            />
            <div className="flex items-center justify-center gap-3">
              <PrimaryButton
                type="button"
                title="Hapus Gambar"
                onClick={() => removeImage(index)}
              >
                <FiTrash />
              </PrimaryButton>
            </div>
          </div>
        ))}
        <PrimaryButton title="Tambah Gambar" type="button" onClick={addImage}>
          <FiPlusCircle />
        </PrimaryButton>
      </div>
      <PrimaryButton>POST</PrimaryButton>
    </form>
  );
};

export default CreateRatingForm;

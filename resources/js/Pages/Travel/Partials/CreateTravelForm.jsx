import InputTitle from "@/Components/InputTitle";
import PrimaryButton from "@/Components/PrimaryButton";
import React, { useState } from "react";
import { FiTrash } from "react-icons/fi";
const fields = [
  {
    name: "title",
    label: "Judul",
    placeholder: "Input Title",
  },
  {
    name: "price",
    label: "Harga",
    placeholder: "Input Harga",
  },
  {
    name: "description",
    label: "Deskripsi",
    placeholder: "Input Deskripsi",
  },
  {
    name: "address",
    label: "Alamat",
    placeholder: "Input Alamat",
  },
  {
    name: "ward",
    label: "Kelurahan",
    placeholder: "Input Kelurahan",
  },
  {
    name: "subdistrict",
    label: "Kecamatan",
    placeholder: "Input Kecamatan",
  },
  {
    name: "regency",
    label: "Kabupaten",
    placeholder: "Input Kabupaten",
  },
  {
    name: "province",
    label: "Provinsi",
    placeholder: "Input Provinsi",
  },
];
const CreateTravelForm = ({ onSubmit }) => {
  const [images, setImages] = useState([1]);
  const addImage = () => {
    setImages([...images, images.length + 1]);
  };
  const removeImage = (i) => {
    if (images.length == 1) return;
    setImages(images.filter((_, index) => index !== i));
  };
  return (
    <form
      onSubmit={onSubmit}
      className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
        {fields.map(({ name, label, placeholder }, index) => (
          <InputTitle
            key={index}
            name={name}
            placeholder={placeholder}
            label={label}
            type={name == "price" ? "number" : "text"}
          />
        ))}
        <InputTitle name={"thumbnail"} label={"Thumbnail"} type={"file"} />
      </div>
      <div className="my-6">
        <div className="flex justify-between items-center">
          <p className="text-black font-bold">Gambar</p>
          <PrimaryButton type="button" onClick={() => addImage()}>
            Tambah
          </PrimaryButton>
        </div>
        {images.map((_, index) => (
          <div className="flex justify-center items-center w-full my-2">
            <InputTitle
              key={index}
              name={`images[${index}]`}
              type={"file"}
              label={"Gambar " + (index + 1)}
            />
            <div className="flex items-center justify-center gap-3">
              <PrimaryButton type="button" onClick={() => removeImage(index)}>
                <FiTrash />
              </PrimaryButton>
            </div>
          </div>
        ))}
      </div>
      <PrimaryButton type="submit">CREATE</PrimaryButton>
    </form>
  );
};

export default CreateTravelForm;

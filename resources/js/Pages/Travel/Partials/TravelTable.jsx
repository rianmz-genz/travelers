import Each from "@/Components/Each";
import PrimaryButton from "@/Components/PrimaryButton";
import React from "react";
import { FiTrash } from "react-icons/fi";

const TravelTable = ({ datas, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table text-black">
        <thead>
          <tr className="bg-black text-white">
            <th className="text-base"></th>
            <th className="text-base">Judul</th>
            <th className="text-base">Deskripsi</th>
            <th className="text-base">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {
            <Each
              of={datas}
              render={(travel, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{travel.title}</td>
                  <td>{travel.description}</td>
                  <td>
                    <PrimaryButton onClick={() => onDelete(travel.id)}>
                      <FiTrash />
                    </PrimaryButton>
                  </td>
                </tr>
              )}
            />
          }
        </tbody>
      </table>
    </div>
  );
};

export default TravelTable;

import InputTitle from "@/Components/InputTitle";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import CreateTravelForm from "./Partials/CreateTravelForm";
import TravelTable from "./Partials/TravelTable";
import { useState, useEffect } from "react";

export default function Travel({ auth, travels }) {
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
    const result = await fetch("/api/travels", {
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

  function onDelete(id) {
    if (confirm("Yakin menghapus ini?")) {
      router.delete("/travels/" + id);
    }
  }

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Travel
        </h2>
      }
    >
      <Head title="Travel" />

      {/* Error modal */}
      <input
        type="checkbox"
        id="error_modal"
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
              htmlFor="error_modal"
              className="btn"
              onClick={() => setErrorModal(false)}
            >
              Close
            </label>
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <CreateTravelForm onSubmit={onSubmit} />
        </div>

        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-6">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
            <TravelTable datas={travels.data} onDelete={onDelete} />
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}

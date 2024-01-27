import InputTitle from "@/Components/InputTitle";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import CreateTravelForm from "./Partials/CreateTravelForm";
import TravelTable from "./Partials/TravelTable";
export default function Travel({ auth, travels }) {
  async function onSubmit(e) {
    e.preventDefault();
    const result = await fetch("/api/travels", {
      method: "POST",
      body: new FormData(e.target),
    });
    if (result.ok) {
      window.location.reload();
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

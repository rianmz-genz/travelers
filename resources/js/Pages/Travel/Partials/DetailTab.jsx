import Each from "@/Components/Each";
import React from "react";

const DetailTab = ({ setActiveTab, tabs, activeTab }) => {
  return (
    <div className="flex rounded-lg overflow-hidden mb-3 w-fit">
      <Each
        of={tabs}
        render={(tab) => (
          <button
            onClick={() => setActiveTab(tab)}
            key={tab.label}
            className={`${
              activeTab.label == tab.label
                ? "bg-neutral shadow text-white"
                : "bg-slate-200 text-black"
            } px-4 py-2`}
          >
            {tab.label}
          </button>
        )}
      />
    </div>
  );
};

export default DetailTab;

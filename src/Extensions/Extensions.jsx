import React from "react";

const Extensions = () => {
  return (
    <div className="py-10">
      <div className="flex flex-row justify-between">
        <h2 className="text-3xl font-bold text-theme">Extensions List</h2>
        <div className="flex flex-row gap-4">
          <button className="choice-buttons p-4 rounded-4xl">All</button>
          <button className="choice-buttons p-4 rounded-4xl">Active</button>
          <button className="choice-buttons p-4 rounded-4xl">Inactive</button>
        </div>
      </div>
    </div>
  );
};

export default Extensions;

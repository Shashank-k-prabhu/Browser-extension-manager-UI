import React, { useState } from "react";
import data from "../assets/data.json";
import Card from "../Card/Card";
const Extensions = () => {
  const [state, setState] = useState("All");

  const handleChoice = (choice) => {
    setState(choice);
  };

  return (
    <div className="py-10">
      <div className="flex flex-row justify-between py-1">
        <h2 className="text-3xl font-bold text-theme">Extensions List</h2>
        <div className="flex flex-row gap-4">
          <button
            className={`choice-buttons ${
              state === "All" ? "selected-button-text" : ""
            }`}
            onClick={() => handleChoice("All")}
          >
            All
          </button>
          <button
            className={`choice-buttons ${
              state === "Active"
                ? "ring-2 ring-red-400 ring-offset-[1.5px] !bg-red-500 selected-button-text"
                : ""
            }`}
            onClick={() => handleChoice("Active")}
          >
            Active
          </button>

          <button
            className={`choice-buttons ${
              state === "Inactive"
                ? "ring-2 ring-red-400 ring-offset-[1.5px] !bg-red-500 selected-button-text"
                : ""
            }`}
            onClick={() => handleChoice("Inactive")}
          >
            Inactive
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 py-10">
        {data
          .filter(
            (item) => state === "All" || item.isActive === (state === "Active")
          )
          .map((item) => (
            <Card
              logo={item.logo}
              name={item.name}
              description={item.description}
              isActive={item.isActive}
            />
          ))}
      </div>
    </div>
  );
};

export default Extensions;

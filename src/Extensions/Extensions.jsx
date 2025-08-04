import React, { useState } from "react";
import data from "../assets/data.json";
import Card from "../Card/Card";
const Extensions = () => {
  const [state, setState] = useState("All");
  const [extensions, setExtensions] = useState(data);
  const handleChoice = (choice) => {
    setState(choice);
  };

  const handleToggle = (name) => {
    setExtensions((prevExtensions) =>
      prevExtensions.map((ext) =>
        ext.name === name ? { ...ext, isActive: !ext.isActive } : ext
      )
    );
  };

  const handleRemove = (name) => {
    setExtensions((prevExtensions) =>
      prevExtensions.filter((ext) => ext.name !== name)
    );
  };

  return (
    <section className=" md:py-10">
      <div className="flex flex-col md:flex-row justify-between py-1 gap-6 items-center">
        <h2 className="text-3xl font-bold text-theme">Extensions List</h2>
        <div className="flex flex-row gap-4">
          <button
            type="button"
            className={`choice-buttons ${
              state === "All" ? "selected-button-text" : ""
            }`}
            onClick={() => handleChoice("All")}
          >
            All
          </button>
          <button
            type="button"
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
            type="button"
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
        {extensions
          .filter(
            (item) => state === "All" || item.isActive === (state === "Active")
          )
          .map((item) => (
            <Card
              key={item.name}
              logo={item.logo}
              name={item.name}
              description={item.description}
              isActive={item.isActive}
              onToggle={() => handleToggle(item.name)}
              onRemove={() => handleRemove(item.name)}
            />
          ))}
      </div>
    </section>
  );
};

export default Extensions;

import React, { useEffect, useState } from "react";

// Import all logos at once using Vite's glob import
const logoModules = import.meta.glob("../assets/images/*.svg", { eager: true });

const Card = ({ logo, name, description, isActive }) => {
  const [logoSrc, setLogoSrc] = useState(null);

  useEffect(() => {
    // Convert filename to full path
    const logoPath = logo;
    console.log(logoModules);

    if (logoModules[logoPath]) {
      setLogoSrc(logoModules[logoPath].default);
    } else {
      console.error("Logo not found:", logo);
    }
  }, [logo]);

  if (!logoSrc) return <div>Loading...</div>;

  return (
    <div className="card">
      <div className="flex flex-row gap-6">
        <img src={logoSrc} alt={`${name} logo`} className="w-18 h-18" />
        <div>
          <h3 className="text-xl font-semibold text-theme">{name}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <button className="choice-buttons !border hover:!border-red-400">
          Remove
        </button>

        <label className="switch">
          <input
            type="checkbox"
            checked={isActive}
            onClick={() => {
              console.log("Toggle active state");
              isActive = !isActive;
            }}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
};

export default Card;

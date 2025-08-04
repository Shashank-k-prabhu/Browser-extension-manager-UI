import React, { useEffect, useState } from "react";

// Import all logos at once using Vite's glob import
const logoModules = import.meta.glob("../assets/images/*.svg", { eager: true });

const Card = ({ logo, name, description, isActive, onToggle, onRemove }) => {
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
        <div className="flex flex-col gap-1.5">
          <h3 className="text-xl font-semibold text-theme">{name}</h3>
          <p className="text-paragraph">{description}</p>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <button
          className="choice-buttons border button-border hover:!border-red-400"
          onClick={onRemove}
        >
          Remove
        </button>

        <label className="switch">
          <input type="checkbox" checked={isActive} onChange={onToggle} />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
};

export default Card;

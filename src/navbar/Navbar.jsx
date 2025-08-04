import logo from "../assets/images/logo.svg";
import moon from "../assets/images/icon-moon.svg";
import sun from "../assets/images/icon-sun.svg";
import { useTheme } from "../Context/ThemeContext";
const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const icon = theme === "light" ? moon : sun;
  return (
    <div className="w-full bg-nav text-white  px-4 py-2 flex items-center justify-between my-8 rounded-2xl">
      <div className="flex flex-row gap-2">
        <img src={logo} alt="Logo" className="h-8" />
        <h1 className="text-2xl font-bold text-theme">Extensions</h1>
      </div>
      <button
        className="bg-text text-white font-bold py-2 px-3 rounded-xl cursor-pointer border-2 border-red-400"
        type="button"
        onClick={toggleTheme}
      >
        <img
          src={icon}
          alt="Toggle Theme"
          className="inline-block px-1 py-2 rounded-xl"
        />
      </button>
    </div>
  );
};

export default Navbar;

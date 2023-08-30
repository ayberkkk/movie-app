import React from "react";
import MenuItems from "./MenuItems";
import { FcSearch } from "react-icons/fc";
import ThemesComp from "./ThemesComp";
const Header = () => {
  const menu = [
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Sign In",
      url: "/login",
    },
  ];
  return (
    <header className="flex items-center gap-4 h-20 p-5">
      <div className="bg-blue-500 p-3 text-xl font-bold rounded-lg text-white">
        Movie App
      </div>
      <div className="flex flex-1 items-center gap-2 border p-3 rounded-lg">
        <input
          className="outline-none bg-transparent"
          placeholder="Search..."
          type="text"
          style={{ width: "100%" }}
        />
        <FcSearch size={25} />
      </div>
      <ThemesComp/>
      {menu.map((mn, i) => (
        <MenuItems mn={mn} key={i} />
      ))}
    </header>
  );
};

export default Header;

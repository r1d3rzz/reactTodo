import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="my-5">
      <NavLink to={"/"}>Todos</NavLink>
      <span className="mx-2">|</span>
      <NavLink to={"/create"}>Create</NavLink>
    </nav>
  );
};

export default Navbar;

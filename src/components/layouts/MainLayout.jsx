import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import Container from "../Container";
import Navbar from "../Navbar";

const MainLayout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </Container>
  );
};

export default MainLayout;

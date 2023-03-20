import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Footer } from "../../Pages/Home/Components/Footer/Footer";
import { SideBar } from "../../Pages/Home/Components/SideBar/SideBar";

export const MainLayout = () => {
  return (
    <>
      <SideBar />
      <Outlet />
      <Footer />
    </>
  );
};

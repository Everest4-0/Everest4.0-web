import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Footer } from "../../Pages/Home/Components/Footer/Footer";
import { Header } from "../../Pages/Home/Components/Header/Header";
import { SideBar } from "../../Pages/Home/Components/SideBar/SideBar";

export const AdminLayout = () => {
  return (
    <>
      <SideBar />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <Header />
        <div className="container-fluid py-4 px-5" style={{minHeight:'300px'}}>
          Admin Layout
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};



import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Pages/User/Components/Footer/Footer";
import Navbar from "../../Pages/User/Components/Navbar/Navbar";

export default function UserLayout({ children }: any) {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

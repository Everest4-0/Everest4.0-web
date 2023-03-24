import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/User/Components/Navbar/Navbar";

export default function UserLayout({ children }: any) {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

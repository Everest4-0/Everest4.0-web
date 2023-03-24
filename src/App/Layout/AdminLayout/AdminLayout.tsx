import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Footer } from "../../Pages/Home/Components/Footer/Footer";
import { Header } from "../../Pages/Home/Components/Header/Header";
import { SideBar } from "../../Pages/Home/Components/SideBar/SideBar";

import {BoxIcon, DashboardIcon, ListIcon, TableIcon, UserIcon} from "../../common/Icons/Icons";
const menus:any[] = [
  {text:'Dashboard', to:'', Icon:DashboardIcon},
  {text:'Users', to:'users', Icon:UserIcon,childs:[{text:'List', to:''},{text:'Config', to:''}]},
  {text:'Table', to:'users', Icon:TableIcon},
  {text:'Courses', to:'courses', Icon:BoxIcon},
  {text:'List', to:'users', Icon:ListIcon}
]
export const AdminLayout = () => {
  return (
    <>
      <SideBar menus={menus} />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <Header />
        <div className="container-fluid py-4 px-5" style={{minHeight:'300px'}}>
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};



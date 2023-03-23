import "./App.scss";
import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./Pages/Main/Main";
import { authRoutes } from "./Pages/Auth/Auth.Routes";
import { AuthLayout } from "./Layout/AuthLayout/AuthLayout";
import { mainRoutes } from "./Pages/Main/Main.Routes";
import { MainLayout } from "./Layout/MainLayout/MainLayout";
import { adminRoutes } from "./Pages/Admin/Admin.Routes";
import { AdminLayout } from "./Layout/AdminLayout/AdminLayout";
import UserLayout from "./Layout/UserLayout/UserLayout";
import { userRoutes } from "./Pages/User/User.Routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <NewRoute path="/auth" routes={authRoutes} layout={<AuthLayout />}/>
        <NewRoute path="/user/*" routes={userRoutes} layout={<UserLayout/>}/>
        <NewRoute path="/admin/*" routes={adminRoutes} layout={<AdminLayout/>}/>
        <NewRoute path="/" routes={mainRoutes} layout={<MainLayout />}/>
      </BrowserRouter>
    </>
  );
}

const NewRoute = ({ path, routes , layout}: any) => 
  <Routes>
    <Route path={path} element={layout}>{renderRoutes(routes)}</Route>
  </Routes>
;

export const renderRoutes = (routes:any[])=>routes.map(({ path, component }: any) => (
  <Route path={path} Component={component} />
));
export default App;

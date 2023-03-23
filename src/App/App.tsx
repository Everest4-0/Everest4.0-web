import "./App.scss";
import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./Pages/Main/Main";
import { authRoutes } from "./Pages/Auth/Auth.Routes";
import { AuthLayout } from "./Layout/AuthLayout/AuthLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <NewRoute path="/auth" routes={authRoutes} layout={<AuthLayout />}/>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
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

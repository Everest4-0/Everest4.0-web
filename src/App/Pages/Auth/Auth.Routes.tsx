import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";

const H1 = () => <>1</>;
const H2 = () => <>2</>;
const H3 = () => <>3</>;

export const authRoutes = [
  { path: "home", component: H1 },
  { path: "start", component: H2 },
  { path: "init", component: H3 },
];



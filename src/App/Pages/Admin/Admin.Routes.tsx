import { Users } from "../Main/Users/Users";
import { Courses } from "../Main/Courses/Courses";
import { Admin } from "./Admin";

export const adminRoutes = [
  { path: "", component: Admin },
  { path: "users/*", component: Users },
  { path: "courses/*", component: Courses },
];


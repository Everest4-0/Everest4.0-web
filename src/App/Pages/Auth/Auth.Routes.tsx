import { SignIn } from "./SignIn/SignIn";
import { SignOn } from "./SignOn/SignOn";

export const authRoutes = [
  { path: "", component: SignIn },
  { path: "signin", component: SignIn },
  { path: "signon", component: SignOn },
];



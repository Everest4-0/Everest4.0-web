
import { Users } from "./Users/Users";
import { Main } from "./Main";

type routerType = {
    path: string,
    childs?: routerType[],
    component: any
}
export const mainRoutes: routerType[] = [
    { path: "", component: Main, },
    { path: "users", component: Users, },
];


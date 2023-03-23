import Profile from "./Profile/Profile";
import User from "./User";

export const userRoutes = [
    {path: 'dashboard', component: User},
    {path: 'dashboard/profile', component: Profile}
]
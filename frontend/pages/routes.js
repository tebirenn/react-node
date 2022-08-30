import { LOGIN_ROUTE, REGISTRATION_ROUTE, USER_ROUTE } from "../utils/consts";
import Login from "./login";
import Profile from "./profile";
import Register from "./register";

export const authRoutes = [
    {
        path: USER_ROUTE,
        Component: Profile
    }
]

export const publicRoutes = [
    {
        path: REGISTRATION_ROUTE,
        Component: Register
    },
    {
        path: LOGIN_ROUTE,
        Component: Login
    }
]
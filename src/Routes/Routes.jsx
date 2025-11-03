import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage";
import Profile from "../Pages/Profile";
import AppDetails from "../Pages/AppDetails";
import LoginForm from "../Pages/Login";
import SignupForm from "../Pages/Signup";
const router = createBrowserRouter([
     {
    path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element:<HomePage></HomePage>
            },
            {
                path: "/profile",
                element:<Profile></Profile>
            }, {
                path: "/appDetails/:id",
                element:<AppDetails></AppDetails>
            }, {
                path: "/login",
                element: <LoginForm></LoginForm>
            }, {
                path: "/signup",
                element:<SignupForm></SignupForm>
            }
    ]
  }
])
export default router;
import { Home } from "../pages/Home"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"
import { BackOffice } from "../pages/BackOffice"

export const nav = [
    { path: "/", name: "Home", element: <Home /> },
    { path: "/signin", name: "Login", element: <Login /> },
    { path: "/signup", name: "Register", element: <Register /> },
    { path: "/backoffice", name: "BackOffice", element: <BackOffice /> },
]
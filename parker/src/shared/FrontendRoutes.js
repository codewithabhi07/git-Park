import About from "../features/frontend/About/About";
import Contact from "../features/frontend/Contact/Contact";
import Home from "../features/frontend/Home/Home";
import Login from "../features/frontend/Login/Login";
import Register from "../features/frontend/Register/Register";

export default [
    {
        label: "Home",
        path: "home",
        component: <Home />,
        ShowInMenu: true
    },
    {
        label: "About",
        path: "about",
        component: <About />,
        ShowInMenu: true
    },
    {
        label: "Contact",
        path: "about",
        component: <Contact />,
        ShowInMenu: true
    },
    {
        label: "Login",
        path: "login",
        component: <Login />,
        ShowInMenu: true
    },
    {
        label: "Register",
        path: "register",
        component: <Register />,
        ShowInMenu: true
    }
];
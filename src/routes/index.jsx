import { createBrowserRouter } from "react-router-dom";
import MainLayout from "~/layouts/main";
import Explore from "~/pages/explore";
import Home from "~/pages/home";
import Notifications from "~/pages/notifications";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children:[
            {
                index: true,
                element: <Home />
            },
            {
                path: "explore",
                element: <Explore />
            },
            {
                path: "notifications",
                element: <Notifications />
            },
            {
                path:"*",
                element:<h1 className="bg-red-200 text-red-600 px-5 py-5 flex items-center justify-center" >Zorun NE SEVGİLİM</h1>,
            }
        ]
    },
   
])


export default routes



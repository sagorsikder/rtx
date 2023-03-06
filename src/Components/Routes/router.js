import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import Invest from "../Page/Invest/Invest";
import Mine from "../Page/Mine/Mine";
import Share from "../Page/Share/Share";
import Trading from "../Page/Trading/Trading";

const router = createBrowserRouter(
    [
        {
            path:'/',
            element : <Main></Main>,
            children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/trading',
                element:<Trading></Trading>
            },
            {
                path:'/invest',
                element:<Invest></Invest>
            },
            {
                path:'share',
                element:<Share></Share>
            },
            {
                path:'mine',
                element:<Mine></Mine>
            }
            ]
        }
    ]
    )

    export default router;
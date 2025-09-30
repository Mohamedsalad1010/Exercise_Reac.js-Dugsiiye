import { createBrowserRouter } from "react-router";

import App from "./App";
import Home from "./Home";
import Login from "./login";
import Posts from "./Posts";
import NotFound from "./notFound";
import ProtectedRouter from "./ProtectedRouter";
import PostDetails from "./PostDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <NotFound/>,
        children:[
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'posts',
                element: (
                    <ProtectedRouter element={<Posts/>}/>
                )
            },
            {
                path: 'posts/:id',
                element: <PostDetails/>
            }

        ]
    }
])
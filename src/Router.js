import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Aboutus from "./components/Aboutus";
import List from "./components/blog/List";
import Create from "./components/blog/Create";
import View from "./components/blog/View";
import Edit from "./components/blog/Edit";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

const router = createBrowserRouter([
    { path: '/', element: <App/> },
    { path: '/about', element: <Aboutus/> },
    { path: '/blog/posts' , element: <List/>},
    { path : '/blog/posts/create' , element : <Create/> },
    { path: '/blog/posts/:postId', element: <View/>},
    { path : '/blog/posts/:postId/edit', element: <Edit/>},
    { path: '/register', element:<Register/>},
    { path: '/login', element:<Login/>}
]);

export default router;
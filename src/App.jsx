import React from "react";
import { Route, useRoutes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Layout from "./pages/layout/Layout";

const App = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About/>,
        },
      
      ],
    },
  ]);

  //  <Routes>
  //     <Route path='/' element={<Home/>}/>
  //   </Routes>
};

export default React.memo(App);
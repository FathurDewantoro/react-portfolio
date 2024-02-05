import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Counter from "./views/counter.jsx";
import "bootstrap/dist/css/bootstrap.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SecondPage from "./views/second_page.jsx";
import Dashboard from "./views/dashboard/dashboard.jsx";
import Projects from "./views/projects/projects.jsx";
import DetailProject from "./views/projects/DetailProject.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
  {
    path: "/second-page",
    element: <SecondPage />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/project/:idProject",
    element: <DetailProject />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

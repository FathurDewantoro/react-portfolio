import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./views/dashboard/dashboard.jsx";
import Projects from "./views/projects/projects.jsx";
import ProjectPresensi from "./views/projects/presensi/project_presensi.jsx";
import ProjectPetCare from "./views/projects/pet_care/project_pet_care.jsx";
import ProjectKashku from "./views/projects/kashku/project_kashku.jsx";
import ProjectManagementBook from "./views/projects/management_book/project_management_book.jsx";
import ProjectEStore from "./views/projects/e-store/project_estore.jsx";
import ProjectSmartHome from "./views/projects/smart_home/project_smart_home.jsx";
import ErrorPage from "./views/error_page.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement:<ErrorPage/>
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/project/presensi",
    element: <ProjectPresensi />,
  },
  {
    path: "/project/pet-care",
    element: <ProjectPetCare />,
  },
  {
    path: "/project/kashku",
    element: <ProjectKashku />,
  },
  {
    path: "/project/book-management",
    element: <ProjectManagementBook />,
  },
  {
    path: "/project/estore",
    element: <ProjectEStore />,
  },
  {
    path: "/project/smart-home",
    element: <ProjectSmartHome />,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode >
    <RouterProvider router={router} />
  </React.StrictMode>
);

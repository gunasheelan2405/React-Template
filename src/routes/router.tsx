import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// BaseRoute is a functional component that acts as a wrapper for nested routes.
// It renders an <Outlet />, which is where child routes will be displayed.
const BaseRoute: React.FC = () => <Outlet />

// RRD Routes Defined Below
const routes = createBrowserRouter([
  {
    path: '/',
    caseSensitive: true,
    element: <BaseRoute />,
    children: [
      {
        path: "",
        // Here I Am Importing The Layout What It Does Is For All The Children Component It Will Add The Headers And Footer Of The Component
        element: <h1> Header </h1>,
        children: [{
          // For Seperate File Create Router and declare with spread operator
        }]
      }]
  }
]);

// Router Component
const Router: React.FC = () => {
  return (
    <RouterProvider router={routes} />
  );
};

export default Router;
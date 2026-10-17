import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Carts from './components/ShoppingCart/Carts.jsx';
import Countries from './components/Country/Countries.jsx';
import MainLayout from './Layout/MainLayout.jsx';
import CountryDetails from './components/Country/CountryDetails.jsx';
import NotFound from './components/Shared/NotFound.jsx';
import Forms from './components/Form/Forms.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,   
    children: [
      {
        index: true,           
        element: <App />,
      },
      {
        path: "countries",
        element: <Countries />,
      },
      {
        path: "countries/:countryName",
        element: <CountryDetails />,
      },
      {
        path: "carts",
        element: <Carts />,
      },
      {
        path: "login",
        element: <Forms />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

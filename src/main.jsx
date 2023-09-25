import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './Components/Error/Error';
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Donation from './Components/Donation/Donation';
import Statistics from './Components/Statistics/Statistics';
import CardDis from './Components/CardDis/CardDis';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
      path:"/",
      element: <Home></Home>
    },
      {
      path:"/donation",
      element: <Donation></Donation>
    },
      {
      path:"/statistics",
      element: <Statistics></Statistics>,
      loader: () => fetch('/data.json')
    },
      {
      path:"/data/:id",
      element: <CardDis></CardDis>,
      loader: () => fetch('/data.json')
    }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

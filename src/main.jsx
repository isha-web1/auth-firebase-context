import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './LayOut/Root.jsx';
import Home from './component/Home/Home.jsx';
import LogIn from './component/LogIn/LogIn.jsx';
import Register from './component/Register/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      } ,
      {
        path : '/login',
        element : <LogIn></LogIn>
      },
      {
        path : '/register',
        element : <Register></Register>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)

import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import CarsPage from './pages/CarsPage';
import DealerPage from './pages/DealerPage';
import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/cars",
    element: <CarsPage/>,   
  },
  {
    path: "/dealers",
    element: <DealerPage/>,   
  },
]);



function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

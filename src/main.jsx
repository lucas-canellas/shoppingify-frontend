import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MyProvider } from './context/Context';
import './index.css';
import { History } from './pages/History';
import { HistoryDetails } from './pages/HistoryDetails';
import { Home } from './pages/Home';
import { SignUp } from './pages/SignUp';
import { Statistics } from './pages/Statistics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/history",
    element: <History />,
  }
  ,{
    path: "/history/:id",
    element: <HistoryDetails />,
  },
  {
    path: "/statistic",
    element: <Statistics />,
  },
  {
    path: "*",
    element: <Home />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyProvider>
      <RouterProvider router={router}/>
    </MyProvider>
  </React.StrictMode>
)

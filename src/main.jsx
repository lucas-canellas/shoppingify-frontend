import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { Home } from './pages/Home';
import { History } from './pages/History';
import { HistoryDetails } from './pages/HistoryDetails';
import { MyProvider } from './context/Context';
import { SignUp } from './pages/SignUp';
import { Statistic } from './pages/Statistic';

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
    element: <Statistic />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyProvider>
      <RouterProvider router={router}/>
    </MyProvider>
  </React.StrictMode>
)

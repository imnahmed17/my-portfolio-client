import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { Toaster } from 'react-hot-toast';
import DashboardLayout from './layouts/DashboardLayout.jsx';
import AddSkill from './pages/dashboard/AddSkill/AddSkill.jsx';
import AddProject from './pages/dashboard/AddProject/AddProject.jsx';
import PrivateRoute from './layouts/PrivateRoute.jsx';
import AddBlog from './pages/dashboard/AddBlog/AddBlog.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    children: [
      {
        index: true,
      },
      {
        path: 'add-skill',
        element: <AddSkill />,
      },
      {
        path: 'add-project',
        element: <AddProject />,
      },
      {
        path: 'add-blog',
        element: <AddBlog />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>,
)

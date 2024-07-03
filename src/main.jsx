import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home/Home.jsx';
import BlogDetails from './pages/BlogDetails/BlogDetails.jsx';
import DashboardLayout from './layouts/DashboardLayout.jsx';
import AddSkill from './pages/dashboard/AddSkill/AddSkill.jsx';
import AddProject from './pages/dashboard/AddProject/AddProject.jsx';
import PrivateRoute from './layouts/PrivateRoute.jsx';
import AddBlog from './pages/dashboard/AddBlog/AddBlog.jsx';
import Login from './pages/Login/Login.jsx';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'blogs/:id',
        element: <BlogDetails />
      },
    ],
  },
  {
    path: '/login', 
    element: <Login />
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    children: [
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
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
      <Toaster />
    </Provider>
  </React.StrictMode>,
)

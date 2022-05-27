import React from 'react';
import { Navigate, useRoutes,Outlet,useNavigate } from 'react-router-dom';
import LandingPage from './component/layout/LandingPage';
import Signin from './component/layout/Signin';
import BlankLayout from './component/layout/BlankLayout';
import Dashboard from './views/dashboard/Dashboard'

export default function Routes(isLoggedIn) {
  return useRoutes([
    {
      path: '/',
      element: <LandingPage/>,
      children: [
        { path: 'signin', element: <Navigate to="/auth/signin"  />  },
        { path: 'talent', element: <Dashboard /> },
      ]
    },
    {
      path: '/auth',
      element: <BlankLayout/>,
      children: [
        { path: 'signin', element: <Signin/> },
      ]
    },
  ]);
}
// App.js
import React, { useState } from 'react';
import Header from './Components/Header';
import ServiceList from './Components/ServiceList';
import WorkerList from './Components/WorkerList';
import {createBrowserRouter,Outlet} from 'react-router-dom'
import BookingCard from './Components/BookingCard';
import WorkerCard from './Components/WorkerCard';

const App = () => {
  return (
    <div>
      <Header />
      <Outlet/>
    </div>
  );
};

export const appRoutes = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <ServiceList/>

      },
      {
        path: '/book/:service',
        element: <WorkerList/>
      }
    ]
  },
])

export default App;

// App.js
import React, { useState } from 'react';
import Header from './Components/Header';
import ServiceList from './Components/ServiceList';
import BookingForm from './Components/BookingForm';
import {createBrowserRouter,Outlet} from 'react-router-dom'
import BookingCard from './Components/BookingCard';

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
        element: <BookingForm/>
      }
    ]
  },
])

export default App;

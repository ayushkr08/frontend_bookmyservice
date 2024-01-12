import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { appRoutes } from './App';
// import BookingForm from './Components/BookingForm';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
    <RouterProvider router={appRoutes} />
   </React.StrictMode>
);

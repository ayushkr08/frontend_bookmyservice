import React, { useState } from "react";
import Header from "./Components/Header";
import ServiceList from "./Components/ServiceList";
import WorkerList from "./Components/WorkerList";
import { createBrowserRouter, Outlet } from "react-router-dom";
import BookingCard from "./Components/BookingCard";
import WorkerCard from "./Components/WorkerCard";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode"
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      {/* <GoogleOAuthProvider clientId="515842943475-413dupstc405bnsca0p6aiv38vh3ejhu.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={credentialResponse => {
            var decoded = jwtDecode(credentialResponse.credential)
            console.log(decoded);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </GoogleOAuthProvider> */}
      <Header />
      <Outlet />
      <Footer />

    </div>
  );
};

export const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ServiceList />,
      },
      {
        path: "/book/:service",
        element: <WorkerList />,
      },
    ],
  },
]);

export default App;

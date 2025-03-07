import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../Home/Home';
import Base from '../Base';

import Services from '../Pages/Services/Services';
import About from '../Pages/About/About';
import ContactUs from '../Pages/Contact/ContactUs';
import Emergency from '../Pages/Emergency/Emergency';
import Help from '../Pages/HelpAndSupport/Help';

const router = createBrowserRouter([
    {
        path:'/',
        element: <Home></Home>
    },
    {
        path: '/',
        element: <Base></Base>,
        children: [
            {
                path: '/services',
                element:<Services></Services>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path: '/contact',
                element:<ContactUs></ContactUs>
            },
            {
                path: '/emergency',
                element: <Emergency></Emergency>
            },
            {
                path:'/help',
                element:<Help></Help>
            }
        ]
    }
])
export default router;
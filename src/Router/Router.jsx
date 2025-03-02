import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../Home/Home';
import Base from '../Base';
import Service from '../Pages/Service/Service';

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
                element:<Service></Service>
            }
        ]
    }
])
export default router;
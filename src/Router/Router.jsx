import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../Home/Home';
import Base from '../Base';

import Services from '../Pages/Services/Services';
import About from '../Pages/About/About';

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
            }
        ]
    }
])
export default router;
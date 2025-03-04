import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../Home/Home';
import Base from '../Base';

import Services from '../Pages/Services/Services';

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
            }
        ]
    }
])
export default router;
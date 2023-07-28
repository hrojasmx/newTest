import React from 'react';
import ReactDOM from 'react-dom/client';

import './Resources/css/app.css';

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
        <Routes />
    </BrowserRouter>
);

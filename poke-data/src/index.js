import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';


import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Visuals from './components/Visuals';
import About from './components/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/visuals',
    element: <Visuals />,
  },
  {
    path: '/about',
    element: <About />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


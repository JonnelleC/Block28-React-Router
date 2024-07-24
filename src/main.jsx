import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Blue from './Blue';
import Red from './Red';
import Home from './home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'blue', element: <Blue /> },
      { path: 'red', element: <Red /> },
      { path: 'home', element: <Home /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    
  </React.StrictMode>,
)

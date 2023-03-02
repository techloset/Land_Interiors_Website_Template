import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Nav from './components/nav/nav';
import About from './components/About/about'
import Blog from './components/blogSection/blog'
import Contact from './components/contacts/contact'
import Projects from './components/projects/projects'
import Studio from './components/studio/studio'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  
 
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Projects",
        element: <Projects />,
      },
      {
        path: "/Studio",
        element: <Studio />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Blog",
        element: <Blog />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
   
  


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

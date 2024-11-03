import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root.jsx';
import AuthProvider from './authProvider/AuthProvider.jsx';
import Home from './pages/Home.jsx';
import SignIn from './pages/SignIn.jsx';
import Registration from './pages/Registration.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element:<Home></Home> ,
        
       
      },
      {
        path: '/signup',
        element:<Registration></Registration> ,
        
       
      },
      {
        path: '/signin',
        element:<SignIn></SignIn>
        
       
      },
    ]
  },



]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />

    </AuthProvider>
  </StrictMode>,
)

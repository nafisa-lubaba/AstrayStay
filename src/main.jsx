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
import Rooms from './pages/Rooms.jsx';
import RoomInfo from './pages/RoomInfo.jsx';
import MyBooking from './pages/MyBooking.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
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
      {
        path: '/rooms',
        element:<Rooms></Rooms>,
       
      },
      {
        path: '/rooms/:id',
        element: 
          <RoomInfo></RoomInfo>,
        loader:({ params }) => fetch(`${import.meta.env.VITE_API_URL}/rooms/${params.id}`)
          
       

      },

      {
        path: '/my-booking',
        element:
          <MyBooking></MyBooking>,
      
       
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

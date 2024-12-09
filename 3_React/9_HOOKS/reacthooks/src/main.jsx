import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Home from './routes/Home.jsx'
import Contact from './routes/Contact.jsx'

import {
  createBrowserRouter, 
  RouterProvider, 
  Router, 
  Navigate 
} from "react-router-dom"

import {HookUseContext} from './components/HookUseContext.jsx'

const router = createBrowserRouter([
 {
   path: "/",
   element: <App />,
   children: [
     {
       path: "/",
       element: <Home />,
     },
     {
       path: "contact",
       element: <Contact />
     }
   ]
 },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HookUseContext>
      <RouterProvider router={router} />
    </HookUseContext>
  </StrictMode>,
)

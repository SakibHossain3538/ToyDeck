import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router";
import router from './Routes/Routes';
import { ToysProvider } from './Context/Context';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ToysProvider>
    <RouterProvider router={router}/>
      </ToysProvider>
  </StrictMode>
)

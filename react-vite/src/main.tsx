import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Pages/App/App.tsx'
import Home from './Pages/Home/Home.tsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Units from './Pages/Units/Units.tsx'

const router = createBrowserRouter([{
  path: '/',
  element: <App/>,
  children: [{
    index: true,
    element: <div> Content </div>
  },
  {
    path: 'units',
    element: <Units></Units>
  }]
},
{
  path: "home",
  element: <Home/>
}]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

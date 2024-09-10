import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProjetosEmDestaque from './pages/ProjetosEmDestaque.jsx';
import MeusFavoritos from './pages/MeusFavoritos.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/projetos-em-destaque",
    element: <ProjetosEmDestaque />,
  },
  {
    path: "/meus-favoritos",
    element: <MeusFavoritos />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />    
  </StrictMode>,
)

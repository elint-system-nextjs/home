import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import { BrowserRouter } from 'react-router';
import Routers from "./Routers";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routers/>
  </BrowserRouter>
);
 
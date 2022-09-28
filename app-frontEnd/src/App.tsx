import React, { createContext, useState } from "react";
import { Router, Route, Navigate, BrowserRouter } from 'react-router-dom';
import Routess from "./routes";


function App() {
  return (
      <BrowserRouter>
          <Routess/>
      </BrowserRouter>
  );
}

export default App;

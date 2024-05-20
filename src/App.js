import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import FetchEmployees from "./FetchEmployee"
import UpdateEmployee from "./UpdateEmployee"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FetchEmployees />} />
          <Route path="/update" element={<UpdateEmployee />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import AddImage from "./components/AddImage";
import ImagesPage from "./components/ImagesPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<ImagesPage />} />
        <Route path="/add-image" element={<AddImage />} />
      </Routes>
    </BrowserRouter>
  );
}

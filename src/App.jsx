import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import SingleCategory from "./components/SingleCategory";
import SingleMealDeatils from "./components/SingleMealDeatils";
import Favorite from "./pages/Favorite";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/:id" element={<SingleCategory />} />
        <Route path="/meal/:id" element={<SingleMealDeatils />} />
        <Route path="favourite" element={<Favorite />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

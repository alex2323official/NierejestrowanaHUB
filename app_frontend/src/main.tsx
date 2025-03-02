import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./assets/styles/reset.css";
import "./assets/styles/variables.css";
import Header from "./assets/components/Header/Header.tsx";
import Footer from "./assets/components/Footer/Footer.tsx";
import Home from "./assets/pages/Home/Home.tsx";
import Magazyn from "./assets/pages/Magazyn/Magazyn.tsx";
import Statystyki from "./assets/pages/Statystyki/Statystyki.tsx";
import Ustawienia from "./assets/pages/Ustawienia/Ustawienia.tsx";
import Page404 from "./assets/pages/Page404/Page404.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/magazyn" element={<Magazyn />} />
        <Route path="/statystyki" element={<Statystyki />} />
        <Route path="/ustawienia" element={<Ustawienia />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </StrictMode>
  </BrowserRouter>
);

import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Promo from "../pages/Promo";
import About from "../pages/About";
import Order from "../pages/Order";
import Outlet from "../pages/Outlet";
import Contact from "../pages/Contact";
import FAQ from "../pages/FAQ";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/promo" element={<Promo />} />
      <Route path="/about" element={<About />} />
      <Route path="/order" element={<Order />} />
      <Route path="/outlet" element={<Outlet />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<FAQ />} />
      
      {/* Jika tidak ada rute yang cocok */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

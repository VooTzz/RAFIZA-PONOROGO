import { Link } from "react-router-dom";
import "./Header.css"; // (opsional, kalau kamu pisahkan style-nya)

export default function Header() {
  return (
    <header>
      <nav className="container flex justify-between items-center py-4">
        <div className="text-2xl font-bold text-red-700">
          🍗 VooTzz Chicken
        </div>

        <ul className="flex gap-6 text-sm font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/promo">Promo</Link></li>
          <li><Link to="/order">Order</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

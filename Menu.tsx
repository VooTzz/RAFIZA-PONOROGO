import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Menu() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold text-center mb-6">🍗 Menu Kami</h1>

      <div className="grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

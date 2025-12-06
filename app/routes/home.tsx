import ProductCard from "../components/ProductCard";
import { useCart } from "../hooks/useCart";
import { useEffect, useState } from "react";
import api from "../services/api";

export default function Home() {
  const { cart, add } = useCart();
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    api.get("/produtos").then(res => setMenu(res.data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Cardápio</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {menu.map(item => (
          <ProductCard key={item.id} item={item} onAdd={add} />
        ))}
      </div>
    </div>
  );
}

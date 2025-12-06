import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProductCard({ item, onAdd }) {
  return (
    <Card className="rounded-2xl shadow-xl hover:scale-105 transition">
      <CardContent className="p-4">
        <img src={item.img} className="w-full rounded-xl mb-3" />
        <h2 className="text-xl font-semibold">{item.name}</h2>
        <p className="text-lg mt-1">R$ {item.price.toFixed(2)}</p>
        <Button className="w-full mt-3" onClick={() => onAdd(item)}>
          Adicionar ao Carrinho
        </Button>
      </CardContent>
    </Card>
  );
}

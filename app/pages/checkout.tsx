import { Button } from "@/components/ui/button";
import { useCart } from "../hooks/useCart";

export default function Checkout() {
  const { cart, total } = useCart();

  function enviarWhatsApp() {
    const texto = cart
      .map((i) => `• ${i.name} - R$ ${i.price}`)
      .join("%0A");

    const mensagem = `Olá! Quero fazer um pedido:%0A${texto}%0A%0ATotal: R$ ${total().toFixed(2)}`;

    window.open(
      `https://wa.me/55SEUNUMEROAQUI?text=${mensagem}`,
      "_blank"
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Finalizar Pedido</h1>

      {cart.map((c, i) => (
        <p key={i}>• {c.name} — R$ {c.price}</p>
      ))}

      <p className="text-xl font-bold mt-4">Total: R$ {total()}</p>

      <Button className="w-full mt-4" onClick={enviarWhatsApp}>
        Enviar para WhatsApp
      </Button>
    </div>
  );
}

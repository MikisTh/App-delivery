import { Button } from "@/components/ui/button";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10">
      <h1 className="text-3xl font-bold mb-4">Entrar</h1>

      <input className="border p-3 rounded-lg w-72" placeholder="Seu nome" />

      <Button className="w-72 mt-4">Continuar</Button>
    </div>
  );
}

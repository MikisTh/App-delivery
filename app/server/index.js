import express from "express";
import cors from "cors";
import fs from "fs";

const db = JSON.parse(fs.readFileSync("./server/db.json"));

const app = express();
app.use(cors());
app.use(express.json());

app.get("/produtos", (req, res) => {
  res.json(db.produtos);
});

app.post("/pedido", (req, res) => {
  console.log("Novo pedido:", req.body);
  res.json({ ok: true });
});

app.listen(3000, () => console.log("API rodando em http://localhost:3000"));

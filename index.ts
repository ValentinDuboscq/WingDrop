import express from "express";
import items from "./data/items.json";
import orders from "./data/orders.json";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send({ items, orders });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

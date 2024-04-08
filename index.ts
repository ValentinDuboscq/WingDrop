import express from "express";
import { orders, items } from "./data";
import sequelize from "./sequelize.ts";
import populateDatabase from "./utils/populateDb.ts";

require("./models/relations.ts");

const app = express();
const port = 8080;

// force: true will delete tables at start
sequelize.sync({ force: true }).then(() => {
  populateDatabase();
});

app.get("/", async (req, res) => {
  res.send({ items, orders });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

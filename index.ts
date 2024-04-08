import express from "express";
import sequelize from "./sequelize.ts";
import populateDatabase from "./utils/populateDb.ts";
import createParcels from "./utils/createParcels.ts";
import calculateFees from "./utils/calculateFees.ts";

require("./models/relations.ts");

const app = express();
const port = 8080;

// force: true will delete tables at start
sequelize.sync({ force: true }).then(() => {
  populateDatabase();
});

app.get("/", async (req, res) => {
  let totalFees = 0;
  const parcels = await createParcels();

  parcels.forEach((parcel) => {
    totalFees += calculateFees(parcel.weight);
  });

  res.send({ parcels, totalFees });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

import { DataTypes } from "sequelize";
import sequelize from "../sequelize.ts";

const Item = sequelize.define(
  "item",
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    weight: DataTypes.FLOAT,
  },
  {
    timestamps: false,
  },
);

export default Item;

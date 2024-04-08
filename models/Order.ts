import { DataTypes } from "sequelize";
import sequelize from "../sequelize.ts";

const Order = sequelize.define(
  "order",
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    date: DataTypes.DATE,
  },
  {
    timestamps: false,
  },
);

export default Order;

import { DataTypes } from "sequelize";
import sequelize from "../sequelize.ts";

const OrderItem = sequelize.define(
  "orderItem",
  {
    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true,
    // },
    quantity: DataTypes.INTEGER,
    // orderId: {
    //   type: DataTypes.STRING,
    //   allowNull: false
    // },
    // itemId: {
    //   type: DataTypes.STRING,
    //   allowNull: false
    // },
    // quantity: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // }
  },
  {
    timestamps: false,
  },
);

export default OrderItem;

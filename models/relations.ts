import Order from "./Order.ts";
import Item from "./Item.ts";
import OrderItem from "./OrderItem.ts";

Order.belongsToMany(Item, {
  through: OrderItem,
  foreignKey: "orderId",
  otherKey: "itemId",
});

Item.belongsToMany(Order, {
  through: OrderItem,
  foreignKey: "itemId",
  otherKey: "orderId",
});

export default { Item, Order, OrderItem };

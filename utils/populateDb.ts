import { orders as ordersData, items as itemsData } from "../data";
import Item from "../models/Item.ts";
import Order from "../models/Order.ts";
import OrderItem from "../models/OrderItem.ts";

// const mergeItems = (items: any) => {
//   const mergedItems = items.reduce((acc, { item_id, quantity }) => {
//     if (acc[item_id]) {
//       acc[item_id] += quantity;
//     } else {
//       acc[item_id] = quantity;
//     }
//     return acc;
//   }, {});
//
//   return items.map(({ item_id }) => ({
//     item_id,
//     quantity: mergedItems[item_id],
//   }));
// };

const populateItems = async () => {
  for (const item of itemsData) {
    await Item.create({
      id: item.id,
      name: item.name,
      weight: parseFloat(item.weight),
    });
  }
};

const populateOrders = async () => {
  for (const order of ordersData) {
    const newOrder = await Order.create({
      id: order.id,
      date: new Date(order.date),
    });

    // for (const item of order.items) {
    //   await OrderItem.create({
    //     quantity: item.quantity,
    //     orderId: newOrder.id,
    //     itemId: item.item_id,
    //   });
    // }
  }
};

const populateDatabase = async () => {
  try {
    await populateItems();
    await populateOrders();
    console.log("La base de données a été peuplée avec succès.");
  } catch (error) {
    console.error("Erreur lors du peuplement de la base de données:", error);
  }
};

export default populateDatabase;

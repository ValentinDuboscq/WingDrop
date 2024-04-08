import ordersData from "./orders.json";
import itemsData from "./items.json";
import type { Item } from "../types/item.ts";
import type { Order } from "../types/order.ts";

export const orders = ordersData as Order[];
export const items = itemsData as Item[];

export default { orders, items };

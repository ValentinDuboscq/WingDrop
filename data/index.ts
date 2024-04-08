import ordersData from "./orders.json";
import itemsData from "./items.json";

type Item = {
  id: string;
  name: string;
  weight: string;
};

type OrderItem = {
  item_id: string;
  quantity: number;
};

type Order = {
  id: string;
  date: string;
  items: OrderItem[];
};

export const orders = ordersData as Order[];
export const items = itemsData as Item[];

export default { orders, items };

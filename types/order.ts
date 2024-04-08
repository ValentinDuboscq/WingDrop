export type OrderItem = {
  item_id: string;
  quantity: number;
};

export type Order = {
  id: string;
  date: string;
  items: OrderItem[];
};

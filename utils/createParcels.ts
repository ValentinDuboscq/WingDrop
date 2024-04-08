import { orders as ordersData, items as itemsData } from "../data";
import type { OrderItem } from "../types/order.ts";

const MAX_PARCELS = 15;

type Parcel = {
  order_id?: number | null;
  items: OrderItem[];
  weight: number;
  tracking_id?: number | null;
  palette_number: number;
};

const generateTrackingCode = async () => {
  // const res = await fetch(
  //   `https://www.random.org/integers/?num=1&min=100000000&max=110000000&col=1&base=10&format=plain&rnd=new`,
  // );
  // const json = await res.json();
  //
  // return json;
  return Math.floor(Math.random() * 1_000_000);
};

const createParcels = async (orders = ordersData, items = itemsData) => {
  let parcels = [];
  let paletteNumber = 1;
  let currentParcel: Parcel = {
    order_id: null,
    items: [],
    weight: 0,
    tracking_id: null,
    palette_number: paletteNumber,
  };

  for (let order of orders) {
    for (let orderItem of order.items) {
      const item = items.find((item) => item.id === orderItem.item_id);

      if (item) {
        const itemWeight = parseFloat(item.weight) * orderItem.quantity;

        if (currentParcel.weight + itemWeight > 30) {
          currentParcel.tracking_id = await generateTrackingCode();
          parcels.push(currentParcel);

          if (parcels.length % MAX_PARCELS === 0) paletteNumber += 1;

          currentParcel = {
            order_id: parseFloat(order.id),
            items: [],
            weight: 0,
            tracking_id: null,
            palette_number: paletteNumber,
          };
        }

        currentParcel.items.push({
          item_id: orderItem.item_id,
          quantity: orderItem.quantity,
        });
        currentParcel.weight += itemWeight;
      }
    }
  }

  // add last parcel if not empty
  if (currentParcel.items.length > 0) {
    currentParcel.tracking_id = await generateTrackingCode();
    parcels.push(currentParcel);
  }

  return parcels;
};

export default createParcels;

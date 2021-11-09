import isEmpty from "lodash/isEmpty";
import { Variant } from "@framework/types";

interface Item {
  id: string | number;
  name: string;
  variants?: Variant[];
  price: number;
  offerPrice?: number;
  [key: string]: unknown;
}
export function generateCartItem(item: Item, attributes: object) {
  const { id, name, variants, price, offerPrice } = item;
  return {
    id: !isEmpty(attributes)
      ? `${id}.${Object.values(attributes).join(".")}`
      : id,
    name,
    variants,
    price: offerPrice ? offerPrice : price,
    attributes,
  };
}

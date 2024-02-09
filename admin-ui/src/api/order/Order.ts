import { JsonValue } from "type-fest";
import { Product } from "../product/Product";
import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  id: string;
  payment: boolean | null;
  paymentstatus?: "Option1" | null;
  price: JsonValue;
  products?: Array<Product>;
  status: JsonValue;
  updatedAt: Date;
  user?: User | null;
};

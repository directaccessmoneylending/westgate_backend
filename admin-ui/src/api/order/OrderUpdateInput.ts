import { InputJsonValue } from "../../types";
import { ProductUpdateManyWithoutOrdersInput } from "./ProductUpdateManyWithoutOrdersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  payment?: boolean | null;
  paymentstatus?: "Option1" | null;
  price?: InputJsonValue;
  products?: ProductUpdateManyWithoutOrdersInput;
  status?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};

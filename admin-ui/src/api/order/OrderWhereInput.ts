import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderWhereInput = {
  id?: StringFilter;
  payment?: BooleanNullableFilter;
  paymentstatus?: "Option1";
  price?: JsonFilter;
  products?: ProductListRelationFilter;
  status?: JsonFilter;
  user?: UserWhereUniqueInput;
};

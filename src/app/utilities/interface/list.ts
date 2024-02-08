import { DocumentNode } from "graphql";

export interface Query {
  [key:string]: DocumentNode;
}
export interface Table {
  cart:TableData
  credit:TableData
  dimension:TableData
  egress:TableData
  expense:TableData
  history:TableData
  income:TableData
  lot:TableData
  payment:TableData
  payment_method:TableData
  premise:TableData
  product:TableData
  promotion:TableData
  provider:TableData
  purchase:TableData
  role:TableData
  route:TableData
  sale:TableData
  seller:TableData
  truck:TableData
  user:TableData
}
export interface TableData{
  fields: Fields;
  columns: string[];
}
export interface Fields{
  [key: string]: string;
}

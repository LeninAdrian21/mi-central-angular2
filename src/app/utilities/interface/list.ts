import { DocumentNode } from "graphql";

export interface Query {
  cart: DocumentNode;
  credit: DocumentNode;
  dimension: DocumentNode;
  egress: DocumentNode;
  expense: DocumentNode;
  history: DocumentNode;
  income: DocumentNode;
  lot: DocumentNode;
  payment: DocumentNode;
  payment_method: DocumentNode;
  premise: DocumentNode;
  product: DocumentNode;
  promotion: DocumentNode;
  provider: DocumentNode;
  purchase: DocumentNode;
  role: DocumentNode;
  route: DocumentNode;
  sale: DocumentNode;
  seller: DocumentNode;
  truck: DocumentNode;
  user: DocumentNode;
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

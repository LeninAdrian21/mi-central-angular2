export interface TableData {
  fields: {[key: string]:string};
  columns: string[];
}
export interface Table {
  egress:TableData;
  income:TableData;
  product:TableData;
}

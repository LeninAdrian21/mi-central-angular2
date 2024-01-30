import { DocumentNode } from "graphql";
export interface OptionsFilter{
  label:string;
  value:string;
}
export interface Filter{
  [key:string]:{
    fields:OptionsFilter[];
    operators:{
      [key:string]:OptionsFilter[];
    }
  }
}
export interface Query {
  [key:string]: DocumentNode;
}



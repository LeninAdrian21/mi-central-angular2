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

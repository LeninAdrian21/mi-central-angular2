import { FormDataItem } from "./formData";

export interface TableRelations {
  [key: string]: {
    fields: {
      position: string;
      [otherField: string]: string;
    };
    columns: string[];
    nameTable: string;
    search: string;
    title: string;
    select:boolean;
    formInfo:FormDataItem[];
  };
}

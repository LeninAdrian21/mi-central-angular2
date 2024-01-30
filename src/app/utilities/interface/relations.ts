import { AbstractControl, ValidationErrors } from "@angular/forms";
import { DocumentNode } from "graphql";

export interface FormData{
  label: string;                               // Etiqueta para mostrar en el formulario.
  name: string;                                // Nombre del campo en el formulario.
  placeholder: string;                         // Marcador de posición para el campo de entrada.
  type: 'text' | 'date'|'time' | 'select'| 'email' | 'password'| 'number'|'tel' |'textarea' | 'checkbox';                                // Tipo de campo (por ejemplo, 'text', 'password', 'email', etc.).
  validators: (
    (control: AbstractControl<any, any>)
    => ValidationErrors | null
  )[];                                         // Validadores del campo.
  pattern?: string;                            // Patrón para validación personalizada.
  min?: any;                                   // Longitud minima permitida para el campo
  max?: any;                                   // Longitud maxima permitida para
  minlength?: string;                          // Longitud mínima permitida para el campo.
  maxlength?: string;                          // Longitud máxima permitida para el campo.
  email?: string;                              // Indica si el campo es para direcciones de correo electrónico.
  disabled: boolean;                           // Indica si el campo está deshabilitado.
  options?: { value: string; label: string }[];// Opciones para campos select.
  default: any;                                // Valor predeterminado del campo.
  table?: string;                              //Valor para valor de la tabla de busqueda del autocompletado de la relacion de la tabla
}
export interface Form{
  cart:FormData[];
  credit:FormData[];
  user:FormData[];
  dimension:FormData[];
  egress:FormData[];
  expense:FormData[];
  history:FormData[];
  income:FormData[];
  lot:FormData[];
  payment:FormData[];
  payment_method:FormData[];
  premise:FormData[];
  product:FormData[];
  promotion:FormData[];
  provider:FormData[];
  purchase:FormData[];
  role:FormData[];
  route:FormData[];
  sale:FormData[];
  seller:FormData[];
  truck:FormData[];
}
export  interface Table{
  [key: string]: {
    fields: {
      [key: string]: string;
    };
    columns: ['select','position',...string[]];
    nameTable: string;
    search: string;
    title: string;
    select:boolean;
    formInfo:FormData[];
    btn:string;
  };
}
export interface RelationsData {
  field:string
}
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

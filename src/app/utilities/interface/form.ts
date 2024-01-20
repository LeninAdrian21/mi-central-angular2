import { AbstractControl, ValidationErrors } from "@angular/forms";

export interface data{
  label: string;                               // Etiqueta para mostrar en el formulario.
  name: string;                                // Nombre del campo en el formulario.
  placeholder: string;                         // Marcador de posición para el campo de entrada.
  type: 'text' | 'date'|'time' | 'select'| 'email' | 'password'| 'number'|'tel' |'textarea' | 'checkbox' | 'button';                                // Tipo de campo (por ejemplo, 'text', 'password', 'email', etc.).
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
export interface form{
  login:data[];
  register:data[];
  forgotPassword:data[];
  cart:data[];
  credit:data[];
  user:data[];
  dimension:data[];
  egress:data[];
  expense:data[];
  history:data[];
  income:data[];
  lot:data[];
  payment:data[];
  paymentMethod:data[];
  premise:data[];
  product:data[];
  promotion:data[];
  provider:data[];
  purchase:data[];
  role:data[];
  route:data[];
  sale:data[];
  seller:data[];
  truck:data[];
}
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
    formInfo:data[];
  };
}

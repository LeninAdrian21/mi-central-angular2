import { AbstractControl, ValidationErrors } from "@angular/forms";
/***
 * Interfaz que define la estructura de un elemento de datos de formulario.
 */
export interface FormDataItem {
  label: string;                               // Etiqueta para mostrar en el formulario.
  name: string;                                // Nombre del campo en el formulario.
  placeholder: string;                         // Marcador de posición para el campo de entrada.
  type: 'text'|'date'|'password'|'email'|'checkbox'|'number'|'time'|'button';                                // Tipo de campo (por ejemplo, 'text', 'password', 'email', etc.).
  validators: ((control: AbstractControl<any, any>) => ValidationErrors | null)[];  // Validadores del campo.
  pattern?: string;                            // Patrón para validación personalizada.
  minlength?: string;                          // Longitud mínima permitida para el campo.
  maxlength?: string;                          // Longitud máxima permitida para el campo.
  email?: string;                              // Indica si el campo es para direcciones de correo electrónico.
  disabled: boolean;                           // Indica si el campo está deshabilitado.
  options?: { value: string; label: string }[];// Opciones para campos select.
  autocomplete?: boolean;                      // Opciones para campos del autocomplete;
  default: any;                             // Valor predeterminado del campo.
  table?: string;                           //Valor para valor de la tabla de busqueda del autocompletado de la relacion de la tabla
}
export interface FormData {
  loggin: FormDataItem[];
  egress: FormDataItem[];
  income: FormDataItem[];
}
export interface FormDataRelations{
  provider: FormDataItem[];
  payment_method: FormDataItem[];
  client: FormDataItem[];
}

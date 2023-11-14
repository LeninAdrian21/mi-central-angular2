import Swal, { SweetAlertIcon } from "sweetalert2";
export const Message = (message: string,icon:SweetAlertIcon ='error') =>{
  Swal.fire({
    position:'center',
    icon:icon,
    title: message,
    showConfirmButton:false,
    timer: 1700
  })
}

import Swal, { SweetAlertIcon } from "sweetalert2";

export const message = (title:string, icon:SweetAlertIcon = 'error') => {
  Swal.fire({
    position:'center',
    icon,
    title,
    showConfirmButton: false,
    timer:1700
  })
}

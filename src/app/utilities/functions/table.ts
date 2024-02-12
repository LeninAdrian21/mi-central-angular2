import Swal from 'sweetalert2';
import { RequestService } from '../../services/request.service';
import { message } from './message';
export const deleteInput:any = {
  cart(id:string, service:RequestService){
    service.delete('carts/'+id).subscribe(data =>{
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        showConfirmButton:false,
        icon: "success",
        timer:1700
      });
      setTimeout(() =>{
        location.reload();
      },2000)
    })
  }
}

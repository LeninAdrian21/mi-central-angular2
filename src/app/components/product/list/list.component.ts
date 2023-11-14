import { Component } from '@angular/core';
import { map } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { table } from 'src/app/shared/table/data';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  rolesAccions:string[] = ['Administrator','Inventorist'];
  rolesEdit:string[] = ['Administrator', 'Inventorist'];
  rolesDelete:string[] = ['Administrator'];
  rolAccions:any;
  rolEdit:any;
  rolDelete:any;
  rol:any;
  fields:{[key:string]:string} = table.product.fields;
  columns:string[]= table.product.columns;
  constructor(private auth: AuthService){
    this.rolAccions = this.auth.getRole().pipe(
      map(role => this.rolesAccions.includes(role))
    );
    this.rolEdit= this.auth.getRole().pipe(
      map(role => this.rolesEdit.includes(role))
    );
    this.rolDelete= this.auth.getRole().pipe(
      map(role => this.rolesDelete.includes(role))
    );
    this.rol = this.auth.getRole().pipe(
      map(role => role));
  }
}

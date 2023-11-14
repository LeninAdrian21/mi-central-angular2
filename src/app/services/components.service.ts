import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {
  private datoSeleccionadoSource = new BehaviorSubject<any>(null);
  datoSeleccionado$ = this.datoSeleccionadoSource.asObservable();

  actualizarDatoSeleccionado(dato: any) {
    this.datoSeleccionadoSource.next(dato);
  }
  private newDataSource =  new BehaviorSubject<any>(null);
  newData$ = this.newDataSource.asObservable();
  updateNewData(data: any) {
    this.newDataSource.next(data);
  }
  constructor() { }
}

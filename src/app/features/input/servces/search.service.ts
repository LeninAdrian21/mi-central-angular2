import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private filtroSource = new BehaviorSubject<string>('');
  filtroActual = this.filtroSource.asObservable();
  UpdateFilter(filtro: string): void {
    this.filtroSource.next(filtro);
  }
}

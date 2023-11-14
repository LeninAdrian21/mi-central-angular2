import { Component, ElementRef, ViewChild } from '@angular/core';
import { SearchService } from './servces/search.service';

@Component({
  selector: 'app-features-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  constructor(private search:SearchService){}
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.search.UpdateFilter(filterValue);
  }
}

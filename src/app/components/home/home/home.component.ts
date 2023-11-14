import { Component, OnInit } from '@angular/core';
import { GraphqlService } from 'src/app/services/graphql.service';
import { HttpClientService } from 'src/app/services/http-client.service';
import { Pagination } from '../../../shared/graphql/pagination';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(private graphql:GraphqlService){}
  ngOnInit(): void {
    this.graphql.GetPaginator('paginationDataIncome',0,10,[]).subscribe(data =>{
      console.log(data);
    },(err) =>{
      console.log(err);
    })
  }
}

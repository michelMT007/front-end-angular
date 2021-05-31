import { Component, OnInit } from '@angular/core';
import Stock from 'src/app/shared/model/stock-model';
import DashcoardService from '../dashcoard.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  //styleUrls: ['./dashboard-page.component.css']
  styleUrls: ['./dashboard-page.component.css']
})
export class DashcoardPageComponent implements OnInit {

  stocks: Stock[] = [];
  constructor(private dashcoardService: DashcoardService) { }
  //quando a pagina e chamada executa o async wait this.fetchStocks();
  ngOnInit(): void { 
    this.fetchStocks();
  }

  async fetchStocks(): Promise<void>{
    this.stocks = await this.dashcoardService.getStocks();
    console.log(this.stocks);
  }

}

import { Component, Input, OnInit } from '@angular/core';
import Stock from '../../shared/model/stock-model';

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.css']
})
export class StockCardComponent implements OnInit {
  
  @Input()
  stock = new Stock();
  constructor() { }

  ngOnInit(): void {
  }

}

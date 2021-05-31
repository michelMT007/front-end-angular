import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DashcoardPageComponent } from './dashboard-page/dashboard-page.component';
import { StockCardComponent } from './stock-card/stock-card.component';




@NgModule({
  declarations: [
    DashcoardPageComponent,
    StockCardComponent
  ],

  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    DashcoardPageComponent,
    StockCardComponent
  ]
})
  
export class DashboardModule {}


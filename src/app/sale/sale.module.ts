import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SaleRoutingModule } from './sale-routing.module';
import { SaleStoreComponent } from './sale-store/sale-store.component';
import { SalesDetailsComponent } from './sales-details/sales-details.component';
import { BuyCartComponent } from './buy-cart/buy-cart.component';

@NgModule({
  declarations: [
    SaleStoreComponent,
    SalesDetailsComponent,
    BuyCartComponent
  ],
  imports: [
    CommonModule,
    SaleRoutingModule
  ]
})
export class SaleModule { }

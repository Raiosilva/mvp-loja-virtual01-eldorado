import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyCartComponent } from './buy-cart/buy-cart.component';
import { SaleStoreComponent } from './sale-store/sale-store.component';
import { SalesDetailsComponent } from './sales-details/sales-details.component';

const routes: Routes = [
  { path: '', component: SaleStoreComponent },
  { path: 'sales/:id', component: SalesDetailsComponent },
  { path: 'buy-cart', component: BuyCartComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleRoutingModule { }

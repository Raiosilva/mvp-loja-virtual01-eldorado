import { Component, OnInit } from '@angular/core';
import { ItemCart, SalesService } from '../sales.service';

@Component({
  selector: 'app-buy-cart',
  templateUrl: './buy-cart.component.html',
  styleUrls: ['./buy-cart.component.sass']
})
export class BuyCartComponent implements OnInit {
  public items: ItemCart[] = [];
  public cupomDesc = '';
  public totalDesc!: number;

  constructor(public service: SalesService) {}

  ngOnInit() {
    this.items = this.service.showItens();
  }

  addProduct(items: ItemCart) {
    this.service.addQtdProduct(items)
  }

  removeProduct(items: ItemCart) {
    this.service.decQtdProduct(items)
  }

  closeOrders() {
    
  }

  cupom() {
    if (this.cupomDesc === 'DESCONTO10')
      this.totalDesc = (10 / 100) * this.service.getCartBuyTotal();    
  }
}

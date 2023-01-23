import { Component, OnInit } from '@angular/core';
import { SalesService } from '../sales.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale-store.component.html',
  styleUrls: ['./sale-store.component.sass']
})
export class SaleStoreComponent implements OnInit {
  products!: any;

  constructor(private salesService: SalesService) {}

  ngOnInit(): void {
    this.salesService.getProducts()
      .subscribe((res: any) => {
        this.products = res.products;
      })
  }

}

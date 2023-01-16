import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params } from '@angular/router';
import { SalesService } from '../sales.service';

@Component({
  selector: 'app-sales-details',
  templateUrl: './sales-details.component.html',
  styleUrls: ['./sales-details.component.sass']
})
export class SalesDetailsComponent implements OnInit {

  products = [
    { id: 'ABC-125', img: '', title: 'Notebook', description: 'I5 Dell', amount: '2500' },
    { id: 'CDE-125', img: '', title: 'Smartphone', description: 'S3', amount: '5000' },
    { id: 'EFG-125', img: '', title: 'Geladeira', description: '220L Fros Free', amount: '3000' },
    { id: 'GIJ-125', img: '', title: 'Mesa', description: 'Madeira madeira', amount: '200' }
  ];

  salesDetails: any;
  productsOnCart: any[] = [];
  isAddProduct = false;

  constructor(
    private route: ActivatedRoute,
    private service: SalesService,
    private snack: MatSnackBar
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.salesDetails = this.products.find(p => p.id === params['id'])
    })
  }

  add() {
    this.isAddProduct = true;
    this.service.includeProduct(this.salesDetails)
    this.service.updateBuyCartState(this.productsOnCart);
    this.openSnackBar();
  }

  openSnackBar() {
    this.snack.open('Produto incluido com sucesso', 'sair', {
      duration: 3000
    });
  }
}

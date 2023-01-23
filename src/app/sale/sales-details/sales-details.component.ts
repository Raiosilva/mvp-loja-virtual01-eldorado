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

  salesDetails: any;
  productsOnCart: any[] = [];
  isAddProduct = false;

  public product: any;

  constructor(
    private route: ActivatedRoute,
    private service: SalesService,
    private snack: MatSnackBar
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let idParams = params['id'];
      this.service.getProductsById(Number(idParams))
        .subscribe((res: any) => {
          this.product = res;
        });
    })
  }

  add() {
    this.isAddProduct = true;
    this.service.includeProduct(this.product)
    this.openSnackBar();
  }

  openSnackBar() {
    this.snack.open('Produto incluido com sucesso', 'sair', {
      duration: 3000
    });
  }
}

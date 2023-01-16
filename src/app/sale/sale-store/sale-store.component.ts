import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-sale',
  templateUrl: './sale-store.component.html',
  styleUrls: ['./sale-store.component.sass']
})
export class SaleStoreComponent {

  products$ = of([
    { id: 'ABC-125', img: '', title: 'Notebook', description: 'I5 Dell', amount: '2500' },
    { id: 'CDE-125', img: '', title: 'Smartphone', description: 'S3', amount: '5000' },
    { id: 'EFG-125', img: '', title: 'Geladeira', description: '220L Fros Free', amount: '3000' },
    { id: 'GIJ-125', img: '', title: 'Mesa', description: 'Madeira madeira', amount: '200' }
  ]);

}

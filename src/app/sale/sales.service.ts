import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export class ItemCart {
  constructor(
    public id: number,
    public img: object,
    public title: string,
    public description: string,
    public amount: number,
    public qtd: number
  ){}
};

@Injectable({
  providedIn: 'root'
})
export class SalesService {
	public buyCartTotal$!: Observable<any>;
  private buyCart = new BehaviorSubject<any>(undefined);

  public itens: ItemCart[] = []

  public showItens(): ItemCart[] {
    return this.itens
  }

  constructor() {
    this.buyCartTotal$ = this.buyCart.asObservable();
  }

  updateBuyCartState(value: any) {
		this.buyCart.next(value);
	}

  getBuyCartState() {
		return this.buyCart.asObservable();
	}

  includeProduct(product: any) {
    let newProduct: ItemCart = new ItemCart(
      product.id,
      product.img,
      product.title,
      product.description,
      product.amount,
      1
    )

    let itemCartFound = this.itens.find((item: ItemCart) => item.id === newProduct.id)
    if (itemCartFound) {
      itemCartFound.qtd += 1;
    } else {
      this.itens.push(newProduct);
    }
  }

  public getCartBuyTotal() {
    let total = 0;
    this.itens.map((item: ItemCart) => {
      total = total + (item.amount * item.qtd);
    });
    return total;
  }

  public addQtdProduct(itemCart: ItemCart): void {
    let itemCartFound = this.itens.find((item: ItemCart) => item.id === itemCart.id);
    if (itemCartFound) {
      itemCartFound.qtd += 1;
    }
  }

  public decQtdProduct(itemCart: ItemCart): void {
    let itemCartFound = this.itens.find((item: ItemCart) => item.id === itemCart.id);
    if (itemCartFound) {
      itemCartFound.qtd -= 1;

      if(itemCartFound.qtd === 0) {
        this.itens.splice(this.itens.indexOf(itemCartFound),1);
      }
    }
  }
}

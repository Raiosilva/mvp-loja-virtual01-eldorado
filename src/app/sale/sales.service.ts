import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export class ItemCart {
  constructor(
    public id: number,
    public thumbnail: object,
    public title: string,
    public description: string,
    public price: number,
    public category: string,
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

  constructor(private http: HttpClient) {
    this.buyCartTotal$ = this.buyCart.asObservable();
  }

  public getProducts(): Observable<any[]> {
    return this.http.get<any[]>('https://dummyjson.com/products?limit=10&skip=10');
  }

  public getProductsById(id: number): Observable<any> {
    return this.http.get<any>(`https://dummyjson.com/products/${id}`);
  }

  includeProduct(product: any) {
    let newProduct: ItemCart = new ItemCart(
      product.id,
      product.thumbnail,
      product.title,
      product.description,
      product.price,
      product.category,
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
      total = total + (item.price * item.qtd);
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

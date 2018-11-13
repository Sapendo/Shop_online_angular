import { Injectable } from '@angular/core';
import { Product } from '../interface/product';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products: Subject<Product> = new Subject();

  constructor() { }

  getBuyProduct(){
    return this.products.asObservable();
  }

  addBuyProduct(product: Product) {
    this.products.next(product);
  }
}

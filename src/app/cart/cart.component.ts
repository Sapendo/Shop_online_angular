import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Product } from '../interface/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  boughtProducts: Product[] = [];
  private subscribtion: Subscription;

  constructor( private cartService: CartService) { }

  ngOnInit() {
    this.subscribtion = this.cartService.getBuyProduct()
      .subscribe( (product: Product) => this.boughtProducts.push(product));
  }

  onDelete(product: Product) {
    let indexProduct = this.boughtProducts.indexOf(product);
    this.boughtProducts.splice(indexProduct, 1);
  }

}

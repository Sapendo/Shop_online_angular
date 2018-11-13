import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/interface/product';
import { CartService } from 'src/app/cart/cart.service';

enum Category {
  Mobile,
  Laptop,
  Appliances
}

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent {

  @Input() product: Product;

  constructor(private cartService: CartService) { }

  onBuy() {
    this.cartService.addBuyProduct(this.product);
  }

}

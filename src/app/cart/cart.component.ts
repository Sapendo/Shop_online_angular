import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Product } from '../interface/product';
import { Subscription } from 'rxjs';
import { ProductsServiceService } from '../product-list-component/products-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  boughtProducts: Product[] = [];
  count = 0;
  totalSum = 0;

  private subscribtion: Subscription;

  constructor (
      private productService: ProductsServiceService,
      private cartService: CartService
    ) { }

  ngOnInit() {
    this.subscribtion = this.cartService.getBuyProduct()
      .subscribe( (product: Product) => this.addProduct(product));
  }

  onDelete(product: Product) {
    const indexProduct = this.boughtProducts.indexOf(product);
    this.boughtProducts.splice(indexProduct, 1);
    this.count = this.boughtProducts.length;
    this.totalSum -= product.price;
    this.productService.incrementProduct(product);
  }

  private addProduct(product: Product) {
    this.boughtProducts.push(product);
    this.count = this.boughtProducts.length;
    this.totalSum += product.price;
  }

}

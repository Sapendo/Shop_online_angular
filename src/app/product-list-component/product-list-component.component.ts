import { Component, OnInit } from '@angular/core';
import { Product } from '../interface/product';
import { ProductsServiceService } from './products-service.service';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.css']
})
export class ProductListComponentComponent implements OnInit {

  products: Product[] = [];

  constructor( private productService: ProductsServiceService ) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}

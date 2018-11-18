import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/interface/product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {

  @Input() product: Product;
  @Output() delete: EventEmitter<Product> = new EventEmitter();

  constructor() { }

  onDelete() {
    this.delete.emit();
  }

}

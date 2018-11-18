import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy } from '@angular/core';
import { Product } from 'src/app/interface/product';

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
  @Output() buy: EventEmitter<Product> = new EventEmitter();

  constructor() { }

  onBuy() {
    this.buy.emit();
  }

  isDisabled(): boolean {
    return this.product.count <= 0;
  }

}

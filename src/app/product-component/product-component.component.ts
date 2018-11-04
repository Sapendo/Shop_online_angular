import { Component, OnInit } from '@angular/core';

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
export class ProductComponentComponent implements OnInit {

    public name = 'Galaxy S8';
    description = 'Galaxy S8 Plus Case for Samsung Galaxy S8 Plus (2017) - Compatible with most 3rd-Party Galaxy S8 Plus accessories';
    price = 800;
    isAvailable = true;

  constructor() { }

  ngOnInit() {
  }

  onBuy() {
    console.log('The product was bought!');
    
  }

}

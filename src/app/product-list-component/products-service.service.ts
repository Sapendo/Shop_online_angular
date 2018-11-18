import { Injectable } from '@angular/core';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  private products: Product[] = [
    {
        name: 'Galaxy A6',
        description: `16MP front and rear cameras capture high-quality photos even in low light 3-level
                    LED flash and VR stickers for an enhanced selfie experience`,
        price: 359.99,
        count: 5,
        isAvailable: true
    },
    {
        name: 'Galaxy J7',
        description: `Go bold with the sleek, new Samsung Galaxy J7. With a 13MP camera that
                    captures incredible photos in low light and 5.5 screen1 to keep you entertained all day,
                    it’s the Galaxy experience that fits your life`,
        price: 249.99,
        count: 2,
        isAvailable: true
    },
    {
        name: 'Galaxy J3',
        description: `An easy-to-use Galaxy smartphone designed for your lifestyle. Shoot and share
                    on a simple camera with plenty of storage to keep your photos. Browse and stream
                    on the go, and get customer support when you need it.`,
        price: 168.00,
        count: 4,
        isAvailable: true
    },
    {
        name: 'Galaxy S9',
        description: `16MP front and rear cameras capture high-quality photos even in low light 3-level
                    LED flash and VR stickers for an enhanced selfie experience`,
        price: 759.99,
        count: 9,
        isAvailable: true
    },
    {
        name: 'Galaxy S8',
        description: `16MP front and rear cameras capture high-quality photos even in low light 3-level
                    LED flash and VR stickers for an enhanced selfie experience`,
        price: 689.99,
        count: 1,
        isAvailable: true
    }
];

  constructor() { }

  getProducts() {
    return this.products;
  }

  incrementProduct(product: Product) {
    this.products.find(p => p === product).count++;
  }

  decrementProduct(product: Product) {
    this.products.find(p => p === product).count--;
  }
}

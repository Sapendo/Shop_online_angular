import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponentComponent } from './product-list-component/product-list-component.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponentComponent } from './product-list-component/product-component/product-component.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { BackgroundDirective } from './directives/background.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponentComponent,
    ProductListComponentComponent,
    CartComponent,
    CartItemComponent,
    BackgroundDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

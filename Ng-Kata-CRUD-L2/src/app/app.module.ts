import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CustomerCRUDComponent } from './customer-crud/customer-crud.component';
import { ProductCRUDComponent } from './product-crud/product-crud.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CustomerCRUDComponent,
    ProductCRUDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

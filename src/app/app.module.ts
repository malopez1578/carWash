import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormUserComponent } from './components/form-user/form-user.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CardsComponent } from './components/cards/cards.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { ServicesComponent } from './components/services/services.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { FilterProductPipe } from './pipes/filter-product.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormUserComponent,
    FooterComponent,
    GalleryComponent,
    CardsComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    ProductsComponent,
    ServicesComponent,
    ProductDetailComponent,
    FilterProductPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

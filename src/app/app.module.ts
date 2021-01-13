import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PagesModule }  from './pages/pages.module';
import { ProductListComponent } from './product-list/product-list.component';
import { BannerComponent } from './banner/banner.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDemoFormComponent } from './product-demo-form/product-demo-form.component';
import { DemoComponent } from './demo/demo.component';

import {ProductItems} from './productModal/productData';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    PageNotFoundComponent,
    ProductListComponent,
    BannerComponent,
    ProductDetailComponent,
    ProductDemoFormComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [ProductItems, Title],
  bootstrap: [AppComponent]
})
export class AppModule { }

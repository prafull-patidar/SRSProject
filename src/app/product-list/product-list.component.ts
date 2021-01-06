import { Component, OnInit, Renderer2 } from '@angular/core';
import { ProductItems } from '../productModal/productData';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  

  constructor(private renderer:Renderer2, private prodimg:ProductItems) { }

  productImg:[];
  ngOnInit(){
    this.productImg = this.prodimg.products;
  }

  show:boolean=false;
  toggleClass(){
    this.show=true;
  }
  removeClass(){
    this.show = false;
  }
}

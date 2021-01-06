import { Component, OnDestroy, OnInit } from '@angular/core';
import {ProductItems} from '../productModal/productData';
import {ActivatedRoute,Params,Router} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit ,OnDestroy{

  constructor(private product:ProductItems,private _activatedRoute:ActivatedRoute,public router:Router) { }
  id;
  selectedProdcut;
  ngOnInit(){
    this._activatedRoute.params.subscribe((params:Params)=>{
      this.id = params['id'];
      console.log(this.id);
    })
    this.selectedProdcut = this.product.products[this.id-1];
  }

  ngOnDestroy(){
    console.log(this._activatedRoute);
  }

}

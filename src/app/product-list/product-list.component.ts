import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  

  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {
  }

  show:boolean=false;
  toggleClass(){
    this.show=true;
  }
  removeClass(){
    this.show = false;
  }
}

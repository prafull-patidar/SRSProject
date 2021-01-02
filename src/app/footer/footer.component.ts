import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log();
  }
  date= new Date();
  year = this.date.getFullYear();
  goToTop(){
    document.body.scrollTop=document.documentElement.scrollTop = 0;
  }
}

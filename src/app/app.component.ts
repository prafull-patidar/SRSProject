import { Component, OnInit } from '@angular/core';
import {Route,Router} from '@angular/router';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'SRS';
  constructor(public router:Router, private _titleService:Title){}

  
  public setTitle(newTitle:string){
  	this._titleService.setTitle(newTitle);
  }
}

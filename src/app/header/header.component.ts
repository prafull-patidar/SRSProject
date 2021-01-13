import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _titleService:Title) { }

  ngOnInit(): void {
  }
  public setTitle(newTitle:string){
  	this._titleService.setTitle(newTitle);
  }
  public isCollapsed = true;
}

import { Component } from '@angular/core';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;


  // spaceBetweenBttn: number;

  constructor() {
   // this.getScreenSize();
  }
  // @HostListener('window:resize', ['$event'])
  // getScreenSize(event?) {
  //   this.spaceBetweenBttn  = Math.round(window.innerWidth / 3) - 100;
  //   //= this.screenWidth /3
  //   //console.log(this.spaceBetweenBttn);
  // }
}

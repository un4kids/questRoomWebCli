import { Component } from '@angular/core';
import { HostListener } from "@angular/core";
import { IMqttMessage, MqttService } from 'ngx-mqtt';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;


  // spaceBetweenBttn: number;
  private subscription: Subscription;
  public message: string;
  constructor() {
   //this.getScreenSize();
   
  }
  // @HostListener('window:resize', ['$event'])
  // getScreenSize(event?) {
  //   this.spaceBetweenBttn  = Math.round(window.innerWidth / 3) - 100;
  //   //= this.screenWidth /3
  //   //console.log(this.spaceBetweenBttn);
  // }



  
}

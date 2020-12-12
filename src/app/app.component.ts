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
  constructor(
    private _mqttService: MqttService,
  ) {
   //this.getScreenSize();
   console.log("APPPPPPP");
   this.subscription = this._mqttService.observe("ui/quest/40f52025c68e/healthCheck")
    .subscribe((msg: IMqttMessage) => {
      this.message = msg.payload.toString()
      console.log(this.message)
    });
  }
  // @HostListener('window:resize', ['$event'])
  // getScreenSize(event?) {
  //   this.spaceBetweenBttn  = Math.round(window.innerWidth / 3) - 100;
  //   //= this.screenWidth /3
  //   //console.log(this.spaceBetweenBttn);
  // }

  public unsafePublish(topic: string, message: string): void {
    this._mqttService.unsafePublish(topic, message, {qos: 1, retain: true});
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

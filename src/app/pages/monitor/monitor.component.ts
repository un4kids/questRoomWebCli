import { Component, Input, OnInit } from '@angular/core';
import { QuestsProviderService } from 'src/app/quests-provider.service';
import { QuestModel, QuestHealthCheck, modeInMsg } from 'src/app/quest.model';
import { QuestDataService } from 'src/app/quest-data.service'
import { BehaviorSubject, interval, Subscription } from 'rxjs';

import {
  IMqttMessage,
  MqttModule,
  IMqttServiceOptions,
  MqttService
} from 'ngx-mqtt';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss']
})
export class MonitorComponent implements OnInit {

  public quests: Array<QuestModel> = [];


  isLoadingOne = false;
  isLoadingTwo = false;

  loading = true;

  public deviceDataSub: Subscription;
  public healthCheck: QuestHealthCheck
  private questsHealthCheckSubs: Array<Subscription> = [];
  public questsHealthCheckData: Array<QuestHealthCheck> = [];
  public message: string;


  constructor(
    private questProviderService: QuestsProviderService,
    private questDataService: QuestDataService,
    private _mqttService: MqttService,

  ) {


  }

  ngOnInit() {

    console.log("FROM TOPIC");
    this.reload();
    this.observeDeviceData();


  }

  private async reload() {
    this.quests = await this.questProviderService.getQuests().toPromise();
    console.log("-----------> LENGTH")
    console.log(this.quests.length);
    //for (let quest of this.quests) {
      this.deviceDataSub = await this.questDataService.observeQuestHealthCheck("40f520267b5")
        .subscribe(hc => {
          this.quests[0].signal_straight = hc.signal_straight;
          this.quests[0].mode = hc.mode;
          console.log(hc);
        })
        

   // }

    this.loading = false;
  }

  /**
 * Subscribes to device data and propagates it to the data subject
 */
  private observeDeviceData() {

  }
  public modeToStr(mode: number)
  {
    let outMode:string ="";
    switch(mode){
      case 0:{
        outMode = "EMPTY"
        break;
      }
      case 1:{
        outMode = "STANBY";
        break;
      } 
      case 2:{
        outMode = "DEPLOY";
        break;
      }
      case 3: {
        outMode = "DONE";
        break;
      }
      case 4: {
        outMode = "RESET";
        break;
      }
      // default:
      //   {
      //     outMode = "EMPTY"
      //     break;
      //   }

    }
    // console.log(outMode);
    // console.log(mode);
    return outMode;
  }

  public resetQuest(macId: string)
  {
    let msg: modeInMsg = {mode: 4}
    this.questDataService.publishModeToQuest("40f520267b5", JSON.stringify(msg));
  }

  public unsafePublish(topic: string, message: string): void {
    this._mqttService.unsafePublish(topic, message, { qos: 1, retain: true });
  }

  public ngOnDestroy() {
    this.deviceDataSub.unsubscribe();
  }

  loadOne(): void {
    this.isLoadingOne = true;
    setTimeout(() => {
      this.isLoadingOne = false;
    }, 5000);
  }

  loadTwo(): void {
    this.isLoadingTwo = true;
    setTimeout(() => {
      this.isLoadingTwo = false;
    }, 5000);
  }

}

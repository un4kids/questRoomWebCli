import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

import { QuestModel, QuestHealthCheck, modeInMsg } from '../quest.model';
import { QuestDataService } from '../quest-data.service'

import {
  IMqttMessage,
  MqttModule,
  IMqttServiceOptions,
  MqttService
} from 'ngx-mqtt';

@Component({
  selector: 'app-device-data',
  templateUrl: './device-data.component.html',
  styleUrls: ['./device-data.component.scss']
})
export class DeviceDataComponent implements OnInit, OnDestroy {

  public questDataSub: Subscription;
  @Input() readonly quest: QuestModel;
  @Input() loading;
  @Output() currentModeEmiter = new EventEmitter<number>();
  public questHealthCheck: QuestHealthCheck = { signal_straight: 0, mode: 0 };
  //loading = true;
  private doneSended: Boolean = false;



  // constructor(
  //   private readonly questDataService: QuestDataService,
  // ) { }
  constructor(
    private _mqttService: MqttService,
    //private readonly questDataService: QuestDataService,
  ) {

  }
  ngOnDestroy(): void {
    //throw new Error('Method not implemented.');
    if (this.questDataSub) {
      this.questDataSub.unsubscribe();
    }
  }
  public unsafePublish(topic: string, message: string): void {
    this._mqttService.unsafePublish(topic, message, {qos: 2, retain: false});
  }

  ngOnInit(): void {
    this.observeQuestData();

    // console.log('DEVICE DATA');
    // console.log(this.quest?.title);
    // console.log(this.loading);
  }

  private observeQuestData() {
    // this.questDataSub = this.questDataService
    //   .observeQuestHealthCheck(this.quest?.mac_addr)
    //   .subscribe(hc => {
    //     this.questHealthCheck.signal_straight = hc.signal_straight;
    //     this.questHealthCheck.mode = hc.mode;
    //     if (!this.doneSended && hc.mode === 3) {
    //       this.currentModeEmiter.emit(hc.mode);
    //       this.doneSended = true;
    //     }
    //     console.log(hc);
    //   }, error => {
    //     console.log('ERROR: on healthCheck');
    //     console.log(error);
    //   }
    //   );

    this.questDataSub = this._mqttService.observe(`ui/quest/${this.quest?.mac_addr}/healthCheck`)
      .subscribe((message: IMqttMessage) => {
        // this.message = message.payload.toString();
        this.questHealthCheck = JSON.parse(message.payload.toString()) as QuestHealthCheck;

        console.log("------------>IN CONSTRUCTOR");
        console.log(this.quest.mac_addr);
      });
    //console.log("------------>IN CONSTRUCTOR");
  }

  public modeToStr(mode: number) {
    let outMode: string = '';
    switch (mode) {
      case 0: {
        outMode = 'INACTIVE'
        break;
      }
      case 1: {
        outMode = 'STANBY';
        break;
      }
      case 2: {
        outMode = 'DEPLOY';
        break;
      }
      case 3: {
        outMode = 'DONE';
        break;
      }
      case 4: {
        outMode = 'RESET';
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

  public resetQuest(macId: string) {
    let msg: modeInMsg = { mode: 4 };
    // this.questDataService.publishModeToQuest(macId, JSON.stringify(msg));
    // this.doneSended = false;
     this.currentModeEmiter.emit(0);

    this._mqttService.publish(`ui/quest/${this.quest.mac_addr}/modeIn`, JSON.stringify(msg))
      .subscribe(res => {
        console.log('---------------> MQTT RES');
        console.log(res);

      }, error => {
        console.log('---------------> MQTT ERROR');
        console.log(error);
      },
        () => {
          console.log('---------------> MQTT COMPLETE');

        }
      );
  }



}

import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { QuestModel, QuestHealthCheck, modeInMsg } from '../quest.model';
import { QuestDataService } from '../quest-data.service'

@Component({
  selector: 'app-device-data',
  templateUrl: './device-data.component.html',
  styleUrls: ['./device-data.component.scss']
})
export class DeviceDataComponent implements OnInit, OnDestroy {

  public questDataSub: Subscription;
  @Input() readonly quest: QuestModel;
  @Input() loading;
  public questHealthCheck: QuestHealthCheck = {signal_straight: 0, mode: 0};
  //loading = true;



  constructor(
    private readonly questDataService: QuestDataService,
  ) { }
  ngOnDestroy(): void {
    //throw new Error('Method not implemented.');
    if (this.questDataSub) {
      this.questDataSub.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.observeQuestData();
    console.log("DEVICE DATA");
    console.log(this.quest?.title);
    console.log(this.loading)
  }

  private observeQuestData() {
    this.questDataSub = this.questDataService
      .observeQuestHealthCheck(this.quest.mac_addr)
      .subscribe(hc => {
        this.questHealthCheck.signal_straight = hc.signal_straight;
        this.questHealthCheck.mode = hc.mode;
        console.log(hc);
      }, error => {
        console.log("ERROR: on healthCheck");
        console.log(error);
      }
      );
  }

  public modeToStr(mode: number)
  {
    let outMode:string ="";
    switch(mode){
      case 0:{
        outMode = "INACTIVE"
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
    this.questDataService.publishModeToQuest(macId, JSON.stringify(msg));
  }

  

}

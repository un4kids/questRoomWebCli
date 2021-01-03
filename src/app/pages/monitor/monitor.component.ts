import { Component, Input, OnInit } from '@angular/core';
import { QuestsProviderService } from 'src/app/quests-provider.service';
import { QuestModel, QuestHealthCheck, modeInMsg } from 'src/app/quest.model';
import { QuestDataService } from 'src/app/quest-data.service'
import { BehaviorSubject, interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss']
})
export class MonitorComponent implements OnInit {

  public quests: Array<QuestModel> = [];
  doneQuests: number = 0;
  private readonly questCount: number = 12;


  isLoadingOne: Boolean = false;
  isLoadingTwo: Boolean = false;

  public loading = true;


  constructor(
    private questProviderService: QuestsProviderService,

  ) {


  }

  ngOnInit() {
    console.log("FROM TOPIC");
    this.reload();
  }


  private async reload() {
    this.quests = await this.questProviderService.getQuests().toPromise();
    this.loading = false;
  }
  acceptData(mode) {
    if (mode === 3 && this.doneQuests <= this.questCount) {
      this.doneQuests++;
    }
    if (mode === 0 && this.doneQuests > 0) {
      this.doneQuests--;
    }
  }
  getDonePercents(dq) {
    let c = this.questCount / dq;
    return (100 / c).toFixed(2);
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

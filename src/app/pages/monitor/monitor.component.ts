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


  isLoadingOne = false;
  isLoadingTwo = false;

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

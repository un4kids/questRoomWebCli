import { Component, OnInit } from '@angular/core';
import { QuestProviderService } from 'src/app/quests-provider.service';
import { QuestModel } from 'src/app/quest.model';



@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss']
})
export class MonitorComponent implements OnInit {

  quests: Array<QuestModel> = [];

  isLoadingOne = false;
  isLoadingTwo = false;

  loading = true;

  constructor(
    private questProviderService: QuestProviderService
  ) { }

  ngOnInit() {
    this.quests = this.questProviderService.getQuests();
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

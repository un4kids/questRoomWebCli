import { Component, OnInit } from '@angular/core';
import { QuestProviderService } from 'src/app/quests-provider.service';
import { QuestModel } from 'src/app/quest.model';



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

  constructor(
    private questProviderService: QuestProviderService,

  ) { }

  ngOnInit() {
    //this.quests = this.questProviderService.getQuests();
    // console.log(this.questProviderService.getQuests());

    // this.questProviderService.getQuests().subscribe(data => {
    //   console.log(data); // should be your users.
    //  // this.users = data.users;

    // }, error => {
    //   console.log(error); // if api returns and error you will get it here  
    // });

  //});
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

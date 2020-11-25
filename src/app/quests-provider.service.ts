import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first, catchError, map } from 'rxjs/operators';

import { QuestModel } from "./quest.model"
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})
export class QuestProviderService {

  items: Array<QuestModel> = []

  // getQuests(): Array<QuestModel> {
  //   for(let i=0; i<15; i++){
  //     this.items.push({id: i, title: "overhead projector", macAddr: "40f52024676c", questIndex: i, createdOn:  "2020-11-24 00:34", updatedOn:  "2020-11-24 00:34"})
  //   }
  //   return this.items;
  // }
  private readonly basePath = `${environment.api_url}/quests`;
  constructor(
    private readonly http: HttpClient
  ) { }

  public getQuests(){
    //
    // console.log(this.http.get<Array<QuestModel>>("http://localhost:5000/api"));
      return this.http.get<Array<QuestModel>>(`${this.basePath}/`);
  }
}

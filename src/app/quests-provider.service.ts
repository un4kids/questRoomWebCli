import { Injectable } from '@angular/core';
import { QuestModel } from "./quest.model"

@Injectable({
  providedIn: 'root'
})
export class QuestProviderService {

  items: Array<QuestModel> = []

  getQuests(): Array<QuestModel> {
    for(let i=0; i<15; i++){
      this.items.push({id: i, url: "url/to", title: "Titile", mode: "standby", queueId: i, macId: "12:23:34:45", signalStrength: 98})
    }
    return this.items;
  }

  constructor() { }
}

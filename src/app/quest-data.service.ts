import { Injectable } from '@angular/core';
import { IMqttMessage, MqttService } from 'ngx-mqtt';
import { map } from 'rxjs/operators';
import { QuestHealthCheck } from './quest.model'

@Injectable({
  providedIn: 'root'
})
export class QuestDataService {

  constructor(
    //private readonly mqttService: MqttService
  ) { }

// Generates observable of MessageType instances for a specific topic
//  @param topic mqtt topic

  private observe<MessageType>(topic: string) {
    
    // return this.mqttService.observe(topic).pipe(map((message: IMqttMessage) => {
    //   // console.log("PAYLOAD---->", message.payload.toString())
    //   return JSON.parse(message.payload.toString()) as MessageType;
    // }, error => {
    //   console.log(error); // if api returns and error you will get it here  
    // }

    // ));
  }

  // tslint:disable-next-line: typedef
  public observeQuestHealthCheck(mac: string) {
    // console.log("------------->call abservable")
    // console.log(this.mqttService.clientId)
    // return this.observe<QuestHealthCheck>(`ui/quest/${mac}/healthCheck`);

  }
  public publishModeToQuest(mac: string, msg: string) {
    console.log(msg);
    // this.mqttService.publish(`ui/quest/${mac}/modeIn`, msg)
    //   .subscribe(res => {
    //     console.log('---------------> MQTT RES');
    //     console.log(res);

    //   }, error => { 
    //     console.log('---------------> MQTT ERROR');
    //     console.log(error);
    //    },
    //    () => {
    //     console.log('---------------> MQTT COMPLETE')

    //    }
    //   );
  }

  public unsafePublish(topic: string, message: string): void {
    //this.mqttService.unsafePublish(topic, message, {qos: 1, retain: true});
  }


}

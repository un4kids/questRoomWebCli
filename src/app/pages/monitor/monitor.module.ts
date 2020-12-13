import { NgModule } from '@angular/core';

import { MonitorRoutingModule } from './monitor-routing.module';

import {CommonModule} from '@angular/common';

import { MonitorComponent } from './monitor.component';
//import { NgZorroAntdModule } from 'ng-zorro-antd/'; //TODO probably import one by one

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzCardModule } from 'ng-zorro-antd/card';

//import {DeviceDataComponent} from '../../device-data/device-data.component'
import {DeviceDataModule} from '../../device-data/device-data.module'

@NgModule({
  imports: [MonitorRoutingModule,
   // NgZorroAntdModule,
    CommonModule,
    NzButtonModule,
    NzListModule,
    NzDividerModule,
    NzSpaceModule,
    NzGridModule,
    NzIconModule,
    NzProgressModule,
    NzCardModule,
    //DeviceDataComponent,
    DeviceDataModule,

  ],
  declarations: [MonitorComponent],
  exports: [MonitorComponent]
})
export class MonitorModule { }

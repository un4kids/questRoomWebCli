import { NgModule } from '@angular/core';

import { MonitorRoutingModule } from './monitor-routing.module';

import {CommonModule} from '@angular/common';

import { MonitorComponent } from './monitor.component';
//import { NgZorroAntdModule } from 'ng-zorro-antd/'; //TODO probably import one by one

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzGridModule } from 'ng-zorro-antd/grid';







@NgModule({
  imports: [MonitorRoutingModule,
   // NgZorroAntdModule,
    CommonModule,
    NzButtonModule,
    NzCardModule,
    NzListModule,
    NzDividerModule,
    NzSpaceModule,
    NzGridModule

  ],
  declarations: [MonitorComponent],
  exports: [MonitorComponent]
})
export class MonitorModule { }

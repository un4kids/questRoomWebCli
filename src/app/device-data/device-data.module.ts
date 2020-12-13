import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceDataComponent } from './device-data.component';
import { NzCardModule } from 'ng-zorro-antd/card';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';



@NgModule({
  imports: [
    CommonModule,
    NzCardModule,
    NzButtonModule,
    NzListModule,
    NzDividerModule,
    NzSpaceModule,
    NzGridModule,
    NzIconModule,
    NzProgressModule,
    NzSkeletonModule,

  ],
  declarations: [DeviceDataComponent],
  exports: [DeviceDataComponent]
 
})
export class DeviceDataModule { }

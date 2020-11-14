import { NgModule } from '@angular/core';

import { ControlRoutingModule } from './control-routing.module';

import { ControlComponent } from './control.component';


@NgModule({
  imports: [ControlRoutingModule],
  declarations: [ControlComponent],
  exports: [ControlComponent]
})
export class ControlModule { }

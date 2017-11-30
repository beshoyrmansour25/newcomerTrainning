import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

import { CapabilityRoutingModule } from './capability-routing.module';
import { CapabilityListComponent } from './capability-list/capability-list.component';
import { CapabilitySingleComponent } from './capability-single/capability-single.component';
import { CapabilityAddComponent } from './capability-add/capability-add.component';
import { CapabilityViewComponent } from './capability-view/capability-view.component';
import { CapabilityEditComponent } from './capability-edit/capability-edit.component';

@NgModule({
  imports: [
    SharedModule,
    CapabilityRoutingModule
  ],
  declarations: [CapabilityListComponent, CapabilitySingleComponent, CapabilityAddComponent, CapabilityViewComponent, CapabilityEditComponent]
})
export class CapabilityModule { }

import { ManagerDashboardService } from './manager-dashboard/manager-dashboard.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { SmeDashboardComponent } from './sme-dashboard/sme-dashboard.component';
import { NewcomerDashboardComponent } from './newcomer-dashboard/newcomer-dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { TaskComponent } from './task/task.component';
import { SmeHomeComponent } from './sme-dashboard/sme-home/sme-home.component';
import { SmeCapabilityComponent } from './sme-dashboard/sme-capability/sme-capability.component';
import { NewcomerHomeComponent } from './newcomer-dashboard/newcomer-home/newcomer-home.component';
import { NewcomerTaskDetailsComponent } from './newcomer-dashboard/newcomer-task-details/newcomer-task-details.component';
import { ManagerHomeComponent } from './manager-dashboard/manager-home/manager-home.component';
import { AddNewcomerComponent } from './manager-dashboard/add-newcomer/add-newcomer.component';
import { SmeAssignComponent } from './sme-dashboard/sme-assign/sme-assign.component';
import { HttpClient } from 'selenium-webdriver/http';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
  ],
  providers:[ManagerDashboardService],
  declarations: [DashboardComponent, ManagerDashboardComponent, SmeDashboardComponent, NewcomerDashboardComponent, TaskComponent, SmeHomeComponent, SmeCapabilityComponent, NewcomerHomeComponent, NewcomerTaskDetailsComponent, ManagerHomeComponent, AddNewcomerComponent, SmeAssignComponent]
})
export class DashboardModule { }

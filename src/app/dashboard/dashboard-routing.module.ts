import { ManagerDashboardService } from './manager-dashboard/manager-dashboard.service';
import { SmeAssignComponent } from './sme-dashboard/sme-assign/sme-assign.component';
import { ManagerHomeComponent } from './manager-dashboard/manager-home/manager-home.component';
import { SmeCapabilityComponent } from './sme-dashboard/sme-capability/sme-capability.component';
import { NewcomerTaskDetailsComponent } from './newcomer-dashboard/newcomer-task-details/newcomer-task-details.component';
import { NewcomerHomeComponent } from './newcomer-dashboard/newcomer-home/newcomer-home.component';
import { SmeHomeComponent } from './sme-dashboard/sme-home/sme-home.component';
import { DashboardComponent } from './dashboard.component';
import { TaskComponent } from './task/task.component';
import { SmeDashboardComponent } from './sme-dashboard/sme-dashboard.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { NewcomerDashboardComponent } from './newcomer-dashboard/newcomer-dashboard.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewcomerComponent } from './manager-dashboard/add-newcomer/add-newcomer.component';
import { AuthGuard } from '../shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: '', redirectTo: 'newcomer', pathMatch: 'full' },
      {
        path: 'newcomer', canDeactivate: [AuthGuard], component: NewcomerDashboardComponent, children: [
          { path: '', component: NewcomerHomeComponent },
          { path: ':taskid', component: NewcomerTaskDetailsComponent },
        ]
      },
      {
        path: 'sme', component: SmeDashboardComponent, children: [
          { path: '', component: SmeHomeComponent },
          { path: 'assign', component: SmeAssignComponent },
          { path: ':capabilityId', component: SmeCapabilityComponent },
        ]
      },
      {
        path: 'manager', canActivate: [AuthGuard], component: ManagerDashboardComponent, children: [
          { path: '', component: ManagerHomeComponent },
          { path: 'add', component: AddNewcomerComponent, resolve: { capabilities: ManagerDashboardService } },
        ]
      },
    ]
  }

  // { path: '', redirectTo: 'newcomer', pathMatch: 'full' },
  // {
  //   path: 'newcomer', children: [
  //     { path: '', component: NewcomerDashboardComponent },
  //     { path: ':taskid', component: TaskComponent },
  //   ]
  // },
  // { path: ':capabilityId', component: CapabilityComponent },
  // { path: 'manager', component: ManagerDashboardComponent },
  // { path: 'sme', component: SmeDashboardComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

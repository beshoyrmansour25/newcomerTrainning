import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

import { TaskRoutingModule } from './task-routing.module';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskSingleComponent } from './task-single/task-single.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskViewComponent } from './task-view/task-view.component';
import { TaskEditComponent } from './task-edit/task-edit.component';

@NgModule({
  imports: [
    SharedModule,
    TaskRoutingModule
  ],
  declarations: [TaskListComponent, TaskSingleComponent, TaskAddComponent, TaskViewComponent, TaskEditComponent]
})
export class TaskModule { }

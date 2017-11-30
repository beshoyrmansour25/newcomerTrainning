import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

import { NewcomerRoutingModule } from './newcomer-routing.module';
import { NewcomerListComponent } from './newcomer-list/newcomer-list.component';
import { NewcomerSingleComponent } from './newcomer-single/newcomer-single.component';
import { NewcomerAddComponent } from './newcomer-add/newcomer-add.component';
import { NewcomerViewComponent } from './newcomer-view/newcomer-view.component';
import { NewcomerEditComponent } from './newcomer-edit/newcomer-edit.component';

@NgModule({
  imports: [
    SharedModule,
    NewcomerRoutingModule
  ],
  declarations: [NewcomerListComponent, NewcomerSingleComponent, NewcomerAddComponent, NewcomerViewComponent, NewcomerEditComponent]
})
export class NewcomerModule { }

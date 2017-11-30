import { NgModel, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseModule  } from 'ngx-bootstrap';

import { SharedRoutingModule } from './shared-routing.module';
import { SingleItemComponent } from './components/single-item/single-item.component';
import { NcNavbarComponent } from './components/nc-navbar/nc-navbar.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [

    FormsModule,
    CommonModule,
    SharedRoutingModule,
    CollapseModule.forRoot(),
  ],
  exports: [NcNavbarComponent, SingleItemComponent, FormsModule, ReactiveFormsModule, TranslateModule],
  declarations: [SingleItemComponent, NcNavbarComponent]
})
export class SharedModule { }

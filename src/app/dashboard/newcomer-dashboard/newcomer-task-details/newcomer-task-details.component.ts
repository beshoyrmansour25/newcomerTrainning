import { NewcomerDashboardService } from './../newcomer-dashboard.service';
import { Component, OnInit } from '@angular/core';
import * as jsonQuey from 'jsonpath';
import { JSONPaths } from './../../../shared/constants/json-path-config';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-newcomer-task-details',
  templateUrl: './newcomer-task-details.component.html',
  styleUrls: ['./newcomer-task-details.component.scss']
})
export class NewcomerTaskDetailsComponent implements OnInit {
  private newcomerName: string;
  constructor(
    private newcomerDashboardService: NewcomerDashboardService,
    private translate: TranslateService
  ) { }

  ngOnInit() {

    //Example For Getting Translations using The Translate Service
    this.translate.get('testKey').subscribe((res: string) => {
      console.log(res);
      this.newcomerDashboardService.getNewcomer(0).subscribe((response) => {
        console.log(response);
        const newcomerFirstName = jsonQuey.value(response, JSONPaths.newcomers.newcomerFirstName);
        const newcomerLastName = jsonQuey.value(response, JSONPaths.newcomers.newcomerLastName);
        const newcomerFullName = jsonQuey.value(response, JSONPaths.newcomers.newcomerFullName);
        console.log(newcomerFullName)
        this.newcomerName = newcomerFirstName[0] + '. ' + newcomerLastName;
      });
    });

  }
}

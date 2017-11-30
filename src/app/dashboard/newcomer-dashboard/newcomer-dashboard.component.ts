import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newcomer-dashboard',
  templateUrl: './newcomer-dashboard.component.html',
  styleUrls: ['./newcomer-dashboard.component.scss']
})
export class NewcomerDashboardComponent implements OnInit {
  private myList = [
    {
      'name': 'eagle view',
      'route': 'dashboard/newcomer'
    },
    {
      'name': 'Add newcomer',
      'route': 'dashboard/sme'
    },
    {
      'name': 'find',
      'route': 'sayHi'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

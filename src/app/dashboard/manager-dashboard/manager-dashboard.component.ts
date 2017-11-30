import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.scss']
})
export class ManagerDashboardComponent implements OnInit {

  constructor() { }
 private myList = [
    {
      'name': 'eagle view',
      'route': 'dashboard/newcomer'
    },
    {
      'name': 'Add newcomer',
      'route': 'sayHi'
    },
    {
      'name': 'find',
      'route': 'sayHi'
    }
  ];
  ngOnInit() {
  }
  sayHi() {
    alert('hi')
  }
}

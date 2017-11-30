import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sme-dashboard',
  templateUrl: './sme-dashboard.component.html',
  styleUrls: ['./sme-dashboard.component.scss']
})
export class SmeDashboardComponent implements OnInit {
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

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nc-navbar',
  templateUrl: './nc-navbar.component.html',
  styleUrls: ['./nc-navbar.component.scss']
})
export class NcNavbarComponent implements OnInit {
  isCollapsed :boolean= true;
  @Input()
  private color: string = 'bg-warning';

  @Input()
  private title: string = '';

  @Input()
  private list =[
    {
      'name': 'eagle view',
      'action': 'sayHi'
    },
    {
      'name': 'Add newcomer',
      'action': 'sayHi'
    },
    {
      'name': 'find',
      'action': 'sayHi'
    }
  ];

  @Input()
  private selectedIndex: number;
  
  constructor() { }

  ngOnInit() {
  }


  
   collapsed(event: any): void {
     console.log(event);
   }
  
   expanded(event: any): void {
     console.log(event);
   }

}

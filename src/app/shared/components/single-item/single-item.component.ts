import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nc-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.scss']
})
export class SingleItemComponent implements OnInit {
  @Input() TaskState: string = 'open';
  @Input() taskName: string = 'some text';
  @Input() btnText: string = 'change state';
  @Input() user: string = 'newcomer';
  @Input() id: number = 1;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }
  btnAction(state: string, user: string, id: number) {
    if ((this.TaskState !='resolved' && user=='newcomer')|| ( user=='sme')) {
      console.log(state);
      console.log(user);
      console.log(id);
      this.router.navigate(['dashboard/newcomer/'+this.id]);
      
    }

  }
}
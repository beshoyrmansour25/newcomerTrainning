import { INewcomer } from './../../../shared/interfaces/i-newcomer';
import { ManagerDashboardService } from './../manager-dashboard.service';
import { ICapability } from './../../../shared/interfaces/i-capability';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, ControlValueAccessor, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-add-newcomer',
  templateUrl: './add-newcomer.component.html',
  styleUrls: ['./add-newcomer.component.scss']
})
export class AddNewcomerComponent implements OnInit {
  private capabilities: ICapability[] = [];
  private selectedCapabilityIndex: number = 0;
  private newcomerForm: FormGroup = new FormBuilder().group({
    'id': 4,
    'firstName': new FormControl(null, Validators.required),
    'lastName': new FormControl(null, Validators.required),
    'email': ['', Validators.required, this.validateVodafoneEmail],
    'password': new FormControl('123456'),
    'capability': new FormGroup({
      'id': new FormControl('null'),
      'name': new FormControl('null'),
      'tasks': new FormControl()

    })
  });
  constructor(private route: ActivatedRoute,
    private managerDashboardService: ManagerDashboardService,
    private formBuilder: FormBuilder

  ) { }

  validateVodafoneEmail(control: FormControl) {
    if ((<string>control.value).includes('vodafone')) {
      return Observable.of(null);
    } else {
      return Observable.of('please enter vodafone email');
    }
  }
  ngOnInit() {
    // this.managerDashboardService.getCapabilities().subscribe((response) => {
    //   this.capabilities=response;
    //   console.log(this.capabilities);
    // });;
    this.capabilities = this.route.snapshot.data.capabilities;


  }

  changeSelectedCapability(capability) {
    this.selectedCapabilityIndex = capability.value;

    // this.capabilities[this.selectedCapabilityIndex].tasks.forEach(element => {
    //   this.newcomerForm.controls.capability.value.tasks.push(
    //     new FormGroup({
    //       'id': new FormControl(element.id),
    //       'name': new FormControl(element.name),
    //       'state': new FormControl(element.state),
    //       'description': new FormControl(element.description),
    //     })
    //   );
    // });


  }
  onAddNewcomer() {
    // tslint:disable-next-line:prefer-const
    let tasks = [];
    this.newcomerForm.controls.capability.value.tasks.forEach(element => {
      tasks.push(this.capabilities[this.selectedCapabilityIndex].tasks.filter(task => task.id === element)[0]);
    });
    let newcomer: INewcomer = {
      id: this.newcomerForm.controls.id.value,
      firstName: this.newcomerForm.controls.firstName.value,
      lastName: this.newcomerForm.controls.lastName.value,
      email: this.newcomerForm.controls.email.value,
      password: this.newcomerForm.controls.password.value,
      startDate: Date.now(),
      capability: this.newcomerForm.controls.capability.value,
      tasks: tasks,
    };
    this.managerDashboardService.addNewcomer(newcomer);
    console.log(newcomer);
  }

  private addNewCapability() {
    const newCapability = {
      name: 'Angular5',
      tasks: [
        {
          id: 0,
          name: 'Angular tasks 0 string',
          state: 'open',
          description: 'Angular description 0 string'
        },
        {
          id: 1,
          name: 'Angular tasks 1 string',
          state: 'open',
          description: 'Angular description 1 string'
        },
        {
          id: 2,
          name: 'Angular tasks 2 string',
          state: 'open',
          description: 'Angular description 2 string'
        },
        {
          id: 3,
          name: 'Angular tasks 3 string',
          state: 'open',
          description: 'Angular description 3 string'
        },
        {
          id: 4,
          name: 'Angular tasks 4 string',
          state: 'open',
          description: 'Angular description 4 string'
        },
      ]
    };
    // this.managerDashboardService.addNewCapability(newCapability)
    //   .subscribe(newCapability => {
    //     console.log(newCapability);
    //   })
  }

}
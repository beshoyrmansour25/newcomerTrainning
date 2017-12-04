import { Component, OnInit, Input, forwardRef } from '@angular/core';
import {
  FormControl, AbstractControl, ValidationErrors, NG_VALUE_ACCESSOR,
  NG_VALIDATORS, ControlValueAccessor, Validator
} from '@angular/forms'

@Component({
  selector: 'nc-text-input',
  templateUrl: './nc-text-input.component.html',
  styleUrls: ['./nc-text-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NcTextInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => NcTextInputComponent),
      multi: true
    }
  ]
})
export class NcTextInputComponent implements OnInit, ControlValueAccessor, Validator {

  @Input() isPassword: boolean = false;
  @Input() required: boolean = false;
  @Input() placeholder: string;
  @Input() errorMsg: string;
  @Input() label: string;
  @Input() type: string = 'text';
  @Input() patternKey: string = '';
  @Input() patternValue: string = '';

  private innerValue: string;
  private onTouchedCallback: Function;
  private onChangedCallback: Function;
  private validateFn: Function;
  private isValid: boolean = false;
  private isTouched: boolean = false;


  get value() {
    return this.innerValue;
  }
  set value(value: any) {
    this.innerValue = value;
    this.onChangedCallback(value);
  }

  validate(c: AbstractControl): ValidationErrors {
    return this.validateFn(c);
  }
  // registerOnValidatorChange?(fn: () => void): void {
  //   throw new Error("Method not implemented.");
  // }
  writeValue(obj: any): void {
    this.innerValue = obj;
  }
  registerOnChange(fn: any): void {
    this.onChangedCallback = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }
  // setDisabledState?(isDisabled: boolean): void {
  //   throw new Error("Method not implemented.");
  // }

  constructor() { }

  ngOnInit() {
    // const patternValueFromConfig = this.helperService.getRegexByKey(this.patternKey);
    
    (this.isPassword) ? this.type = "password" : this.type = "text";
    this.validateFn = this.createTextBoxValidator();
    switch (this.patternKey) {
      case 'email':
        this.patternValue = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@vodafone?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
        break;
      case 'name':
        this.patternValue = "^[a-zA-Z ]{2,30}$"
        break;
      case 'password':
        this.patternValue = '^[a-zA-Z0-9]{8,32}$'
        break;
      default:
        this.patternValue = ''
        break;
    }
    this.validateFn = this.createTextBoxValidator();

  }
  showPassword() {
    (this.type == "text") ? this.type = "password" : this.type = "text";
  }
  createTextBoxValidator() {
    const patt = new RegExp(this.patternValue);
    return (c: FormControl) => {
      if (patt && this.required) {
        this.isValid = !(patt.test(c.value));
        this.isTouched = true;
        return (c.value && patt.test(c.value)) ? null : { mismatch: true }
      } else if (patt && c.value) {
        this.isValid = !(patt.test(c.value));
        this.isTouched = true;
        return (patt.test(c.value)) ? null : { mismatch: true }
      } else {
        return null;
      }
    };
  }

}

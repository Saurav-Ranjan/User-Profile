import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataServiceService } from '../Services/user-data-service.service';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent {
  public regForm!: FormGroup;
  public today!: Date;
  public batchStartDate!: string;
  public minDate: any;
  userData: any;

  constructor(private formBuilder: FormBuilder, private router: Router , private userDataService: UserDataServiceService) { }

  ngOnInit() {
    this.regForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      addresses: this.formBuilder.array([this.createAddressGroup()])
    });
  }

  createAddressGroup() {
    return this.formBuilder.group({
      city: ['', Validators.required],
      state: ['', Validators.required],
      pinCode: ['', Validators.required]
    });
  }

  get addresses() {
    return this.regForm.get('addresses') as FormArray;
  }

  addAddress() {
    this.addresses.push(this.createAddressGroup());
  }

  deleteAddress(index: number) {
    this.addresses.removeAt(index);
  }

  submitData() {
   
  const userData = this.regForm.value;
  console.log(userData);
  if (this.addresses.length === 0) {
    this.addAddress();
  }
  this.userDataService.setUserData(userData);
  this.router.navigate(['/user-details']);
  }

  
  resetData() {
    this.regForm.reset();
  }

}

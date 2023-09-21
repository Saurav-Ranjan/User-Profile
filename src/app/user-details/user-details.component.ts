import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserDataServiceService } from '../Services/user-data-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit{

  userData: any[] = [];

  constructor(private route: ActivatedRoute , private userDataService: UserDataServiceService) {}

  ngOnInit() {
    this.userData = this.userDataService.getUserData();
    console.log("this.userData" ,this.userData );
  }


  deleteUser(index:any){
    this.userData.splice(index, 1);
    console.log("this.userData 1" ,this.userData)
   this.userDataService.setUserData(this.userData);
  }


}
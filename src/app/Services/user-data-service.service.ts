import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataServiceService {

  constructor() { }

  private userData: any[]=[];

  setUserData(userData: any) {
    this.userData.push(userData);
  }

  getUserData() {
    return this.userData;
  }

 
}

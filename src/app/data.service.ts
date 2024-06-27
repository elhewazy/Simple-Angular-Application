import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

public myInfo ={firstName:"ahmed",lastName:"elhewazy",email:"ahmed.yahoo.com"};

getMyFirstName():string{
return this.myInfo.firstName;
}
}

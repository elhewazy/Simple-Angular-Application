import { Component } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css',
  providers: [DataService]

})
export class MyComponentComponent{
constructor(private dataservice:DataService){
//this.myInfoFromDataService = dataservice.myInfo.firstName;

}

  title = "mycommponent adding new component";

  mylist = ["ahmed","mohamed","abdullah"];
  names = "mohamed";
  myInfoFromDataService = this.dataservice.myInfo;
}

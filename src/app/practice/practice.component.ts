import { Component } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent {
 Employee : String = "";

  Emp: String[] = ["sanket", "ashish","bill"];


  addEmp(){
    if(this.Employee!=""){
    this.Emp.push(this.Employee);
   console.log(this.Emp); 
    }
  }




}

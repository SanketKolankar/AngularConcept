import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ClearConcept';
  message = "data want";
  userInput = " ";

  show(){
    
  }

//     observable = new Observable((observe)=>{
//       setTimeout(()=>{
//         observe.next("data is available");
//         observe.next("another data is available");
//       }, 10000);
  
// }).subscribe((result:any)=>{
//     console.log(result);
// });

constructor(private router:Router){}

navigateToPractice(){
  this.router.navigate(['/practice']);

}



receiveDataFromChild($event:any){
  this.message=$event;
}

ngOnInit(){
  console.log("ngOnInit Called");
}

ngDoCheck(){
  console.log("DoCheck Called");
}

f(){
  console.log("button click");
}

ngOnDestroy(){
  console.log("destroy Called");
}

ngAfterContentInit(){
  console.log("content View ");
}

ngAfterContentCheck(){
  console.log("check View ");
}

}

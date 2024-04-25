import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent   {

 // @Input() data:any;
lastname:string = "kolankar";
 @Output() myEvent = new EventEmitter<string>();


sendMessageToParents(){
  this.myEvent.emit(this.lastname);
}

}

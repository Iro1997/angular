import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  count =0;
  @Output() notify : EventEmitter<number>= new EventEmitter();  // Input is a decorator is going to get a value from another component


  increment(){
    this.count++;
    this.notify.emit(this.count);

  }

  decrement(){
    this.count--;
    this.notify.emit(this.count);
  }
}

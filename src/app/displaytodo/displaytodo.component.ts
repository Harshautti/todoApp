import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-displaytodo',
  templateUrl: './displaytodo.component.html',
  styleUrls: ['./displaytodo.component.css']
})
export class DisplaytodoComponent {
  constructor(private service:ServiceService){}
  // todolist=[
  //   {id:1,"taskname":"task1"},
  //   {id:2,"taskname":"task2"},
  //   {id:3,"taskname":"task3"},
  // ]
  
  todolist:any= this.service.todolist
  deletetodo(index:any){
    this.service.deletetodo(index)
  }
}

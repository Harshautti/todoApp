import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  taskid=4

  todolist=[
    {id:1,"taskname":"task1"},
    {id:2,"taskname":"task2"},
    {id:3,"taskname":"task3"},
  ]
  
    
  constructor() { }

  addData(taskdata:string){
    this.todolist.push({id:this.taskid++,"taskname":taskdata})
  }
  deletetodo(index:any){
     this.todolist.splice(index,1)
  }
}

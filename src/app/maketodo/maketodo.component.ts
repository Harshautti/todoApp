import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-maketodo',
  templateUrl: './maketodo.component.html',
  styleUrls: ['./maketodo.component.css']
})
export class MaketodoComponent {
   constructor(private service:ServiceService){}
  taskinput=''
  addTask(){
    this.service.addData(this.taskinput)
    this.taskinput=''
  }
  reset(){
    this.taskinput=''
  }

}

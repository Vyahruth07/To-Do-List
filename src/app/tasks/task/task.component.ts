import { CommonModule, DatePipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

import { Tasks } from '../tasks.model';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { TasksService } from '../tasks.service';



@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule,DatePipe,MatButtonModule,MatCardModule,MatFormFieldModule,MatIconModule,MatInputModule,MatSelectModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
@Input({required:true}) task!: Tasks;
tasks=inject(TasksService);

updateTaskState(id: number, newState: string) {
  
  if(newState==='inprogress'){
    this.task.startDate=new Date();
}
this.task.state=newState;
}

 
getButtonStyle(state:string){
  switch (state) {
    case 'done':
      return { 'background-color': '#00D100', color: 'white' };
    case 'todo':
      return { 'background-color': 'grey', color: 'white' };
    case 'inprogress':
      return { 'background-color': '#FFC000', color: 'black' };
    default:
      return { 'background-color': 'black', color: 'white' };
  }
}

}

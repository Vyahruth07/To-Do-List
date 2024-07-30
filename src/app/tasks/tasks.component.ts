import { Component, inject } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { Tasks } from './tasks.model';
import { NewTaskComponent } from "./new-task/new-task.component";
import { MatDialogRef } from '@angular/material/dialog';
import { HeaderComponent } from "../header/header.component";
import { TasksService } from './tasks.service';





@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent, HeaderComponent],
  providers: [
    { provide: MatDialogRef, useValue: {} },
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  
})
export class TasksComponent {
  task=inject(TasksService);
  selected=this.task.selectedTasks;



}

import { Component, EventEmitter, inject, output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { TasksService } from '../tasks.service';


@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [MatFormField,FormsModule,MatDialogModule,MatInputModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

constructor(private dialogRef :MatDialogRef<NewTaskComponent>){};
tasks=inject(TasksService);
// add= output<{title:string,task:string}>();
title='';
description='';

onCancel(){
  this.dialogRef.close();
}

onSubmit(){
  // console.log(this.title,this.description);
  // this.add.emit({title:this.title,task:this.description});
  this.tasks.onAddTask(this.title,this.description);
  this.dialogRef.close();
}

}

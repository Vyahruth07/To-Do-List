import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NewTaskComponent } from "../tasks/new-task/new-task.component";
import { MatDialog, MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, NewTaskComponent,MatDialogModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  constructor(public dialog: MatDialog) {}
  openDialog(){
    const dialogRef = this.dialog.open(NewTaskComponent, {
      width: '400px',
      disableClose: false
    });
    
  }

  // onAddTask(){
  //   this.addTask=true;
  // }

  // onCancelTask(){
  //   this.addTask=false;
  // }

}
  


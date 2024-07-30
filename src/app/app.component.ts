import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from "./tasks/tasks.component";
import { TaskComponent } from './tasks/task/task.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, TasksComponent,TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}

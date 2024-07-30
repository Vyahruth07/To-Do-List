import { Injectable } from "@angular/core";
import { Tasks } from "./tasks.model";

@Injectable({
    providedIn:'root'
})
export class TasksService{

    tasks:Tasks[] =[
        {
          id: 1,
          title: 'First Task',
          description: 'rabdom gibberish',
          startDate: null,
          createdDate: new Date(),
          state: 'todo'
        },
        {
          id: 2,
          title: 'Second Task',
          description: 'rabdom gibberish',
          startDate: null,
          createdDate: new Date(),
          state: 'todo'
        },
        {
          id: 3,
          title: 'Third Task',
          description: 'rabdom gibberish',
          startDate: null,
          createdDate: new Date(),
          state: 'todo'
        }
      ];

      get selectedTasks(){
        return this.tasks;
      }
      
      onAddTask(head:string,description:string){
      const task:Tasks={
        id: this.tasks.length + 1,
        title: head,
        description: description ,
        startDate: null,
        createdDate: new Date(),
        state: 'todo'
      }
      this.tasks.push(task);
      
      }

}
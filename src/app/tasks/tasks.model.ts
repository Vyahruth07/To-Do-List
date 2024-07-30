export interface Tasks {
    id:number;
    title: string;
    description: string;
    startDate: Date|null;
    createdDate: Date;
    state: string| 'todo'| 'inprogress'| 'done';
  }
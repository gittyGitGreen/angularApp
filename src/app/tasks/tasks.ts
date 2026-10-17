import { Component } from '@angular/core';
type Status = 'Complete' | 'Incomplete';
interface Task  {
  id: number, title: string, status: Status
}
@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})


export class Tasks {
  heading = 'My Tasks';
  
  tasks: Task[] = [
    {id: 1, title: 'Learn Angular routing', status: 'Complete'},
    {id: 2, title: 'Build tasks page', status: 'Incomplete'},
    {id: 3, title: 'practise typescript', status: 'Incomplete'}
  ];
 get completedTasks() {
  return this.tasks.filter(task => task.status === 'Complete').length;
 }

 get incompleteTasks() {
  return this.tasks.filter(task => task.status !== 'Complete').length;
 }
  

  updateStatus(event: Event, index: number) {
    const checkbox = event.target as HTMLInputElement;
    const checked: boolean = checkbox.checked;
    this.tasks[index].status = checked ? 'Complete' : 'Incomplete';
    
  }
}

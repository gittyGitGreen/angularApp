import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  heading = 'My Tasks';
  tasks = [
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
  

  updateStatus(newStatus: boolean, index: number) {
    this.tasks[index].status = newStatus ? 'Complete' : 'Incomplete';
    
  }
}

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
  completedTasks = 1;
  incompleteTasks = 2;
  totalTasks = 3;

  updateStatus(newStatus: boolean, index: any) {
    this.tasks[index].status = newStatus ? 'Complete' : 'Incomplete';
    this.completedTasks = this.tasks.filter(task => task.status === 'Complete')?.length;
    this.incompleteTasks = this.tasks.filter(task => task.status !== 'Complete')?.length;
    this.totalTasks = this.tasks.length;
  }
}

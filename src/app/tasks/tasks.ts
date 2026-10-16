import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  heading = 'Tasks';
  userName: string = 'Swati';
  welcomeText = `Hi, welcome ${this.userName}!`;
}

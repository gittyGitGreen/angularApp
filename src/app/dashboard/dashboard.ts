import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  heading = 'Personal Life Dashboard';
  userName: string = 'Swati';
  welcomeText = `Hi, welcome ${this.userName}!`;
}

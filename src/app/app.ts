import { Component } from '@angular/core';

@Component({
  selector: 'app-app',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  heading = 'Personal Life Dashboard';
  userName: string = 'Swati';
  welcomeText = `Hi, welcome ${this.userName}!`;
}

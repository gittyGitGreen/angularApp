import { Component } from '@angular/core';

@Component({
  selector: 'app-app',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
  export: [App]
})
export class App {
  heading = 'Personal Life Dashboard';
  userName: string = 'Swati';
  welcomeText = `Hi, welcome ${this.userName}!`;
}

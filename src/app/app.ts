import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-app',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  heading = 'Personal Life Dashboard';
  userName: string = 'Swati';
  welcomeText = `Hi, welcome ${this.userName}!`;
}

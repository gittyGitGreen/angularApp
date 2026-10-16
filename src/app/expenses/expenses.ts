import { Component } from '@angular/core';

@Component({
  selector: 'app-expenses',
  imports: [],
  templateUrl: './expenses.html',
  styleUrl: './expenses.css',
})
export class Expenses {
  heading = 'Expenses';
  userName: string = 'Swati';
  welcomeText = `Hi, welcome ${this.userName}!`;
}

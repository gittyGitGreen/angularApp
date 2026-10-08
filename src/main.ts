import { Component, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';

@Component({
  selector: 'app-root',
 imports: [AppComponent],
  template: `
  <app-app></app-app>
  `,
})
export class App {
 
  counter = signal(0);
}

bootstrapApplication(App);

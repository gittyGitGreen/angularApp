import { Component, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app-app';

@Component({
  selector: 'app-root',
  imports: [App],
  template: `
  <app-app></app-app>
  `,
})
export class App {
 
  counter = signal(0);
}

bootstrapApplication(App);

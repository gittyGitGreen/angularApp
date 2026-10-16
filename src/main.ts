import { Component, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import {appConfig} from './app/app.config';
import {RouterOutlet} from '@angular/router';
@Component({
  selector: 'app-root',
 imports: [ RouterOutlet],
  template: `
 <router-outlet></router-outlet>
  `,
})
export class App {
 
  counter = signal(0);
}

bootstrapApplication(App, appConfig);

import {Routes} from '@angular/router';
import {Dashboard} from './dashboard/dashboard';
import {AppComponent} from './app';
export const routes: Routes = [
    
    {path: '', component: AppComponent,
children : [{path: 'dashboard', component: Dashboard},]}
]
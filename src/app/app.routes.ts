import {Routes} from '@angular/router';
import {Dashboard} from './dashboard/dashboard';
import {Tasks} from './tasks/tasks';
import {Expenses} from './expenses/expenses';
import {AppComponent} from './app';
export const routes: Routes = [
    
    {path: '', component: AppComponent,
        children : [
        {path: 'dashboard', component: Dashboard},
        {path: 'tasks', component: Tasks},
        {path: 'expenses', component: Expenses},
        {
             path: '', redirectTo: 'dashboard', pathMatch: 'full'
          }
        ]
    }
]
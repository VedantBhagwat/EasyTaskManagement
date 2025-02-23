import { Routes } from '@angular/router';

import { NoTaskComponent } from './components/tasks/no-task/no-task.component';
import { UserTasksComponent } from './components/users/user-tasks/user-tasks.component';

export const routes: Routes = [
  { path: '', component: NoTaskComponent },
  { path: 'users/:userId', component: UserTasksComponent },
];

import { Routes } from '@angular/router';

import { NoTaskComponent } from './components/tasks/no-task/no-task.component';
import {
  resolveTitle,
  resolveUserName,
  UserTasksComponent,
} from './components/users/user-tasks/user-tasks.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { userRoutes } from './routes/users.routes';

export const routes: Routes = [
  { path: '', component: NoTaskComponent, title: 'No Tasks Selected' },
  {
    path: 'users/:userId',
    component: UserTasksComponent,
    children: userRoutes,
    // Add static data to routes
    data: {
      message: 'Hello!',
    },
    // Add dynamic data to routes
    resolve: {
      userName: resolveUserName,
    },
    title: resolveTitle,
  },
  { path: '**', component: NotFoundComponent },
];

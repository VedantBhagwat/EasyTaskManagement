import { Routes } from '@angular/router';

import { NoTaskComponent } from './components/tasks/no-task/no-task.component';
import {
  resolveTitle,
  resolveUserName,
  UserTasksComponent,
} from './components/users/user-tasks/user-tasks.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { NewTaskComponent } from './components/tasks/new-task/new-task.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: NoTaskComponent, title: 'No Tasks Selected' },
  {
    path: 'users/:userId',
    component: UserTasksComponent,
    children: [
      { path: '', redirectTo: 'tasks', pathMatch: 'full' },
      { path: 'tasks', component: TasksComponent },
      { path: 'tasks/new', component: NewTaskComponent },
    ],
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

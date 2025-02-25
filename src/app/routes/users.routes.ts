import { Routes } from '@angular/router';
import {
  NewTaskComponent,
  canLeaveEditPage,
} from '../components/tasks/new-task/new-task.component';

export const userRoutes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  {
    path: 'tasks',
    loadComponent: () =>
      import('../components/tasks/tasks.component').then(
        (mod) => mod.TasksComponent
      ),
  },
  {
    path: 'tasks/new',
    component: NewTaskComponent,
    canDeactivate: [canLeaveEditPage],
  },
];

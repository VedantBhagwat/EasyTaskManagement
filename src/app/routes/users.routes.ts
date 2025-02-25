import { Routes } from '@angular/router';
import {
  NewTaskComponent,
  canLeaveEditPage,
} from '../components/tasks/new-task/new-task.component';
import { TasksComponent } from '../components/tasks/tasks.component';

export const userRoutes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  {
    path: 'tasks',
    component: TasksComponent,
    // As the users route group is loadin lazily, we don't need to load TasksComponent lazily
    // loadComponent: () =>
    //   import('../components/tasks/tasks.component').then(
    //     (mod) => mod.TasksComponent
    //   ),
  },
  {
    path: 'tasks/new',
    component: NewTaskComponent,
    canDeactivate: [canLeaveEditPage],
  },
];

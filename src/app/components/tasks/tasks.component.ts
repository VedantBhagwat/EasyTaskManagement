import { Component } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { Task } from '../../interfaces/task.model';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  userTasks: Task[] = [];
}

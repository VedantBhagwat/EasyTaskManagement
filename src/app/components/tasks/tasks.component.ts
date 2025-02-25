import {
  Component,
  computed,
  DestroyRef,
  inject,
  input,
  OnInit,
  signal,
} from '@angular/core';
import { TaskComponent } from './task/task.component';
import { Task } from '../../interfaces/task.model';
import { TasksService } from '../../services/tasks.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, RouterLink],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent implements OnInit {
  // userTasks: Task[] = [];
  userId = input.required<string>();
  // Approach 1: using signals
  // order = input<'asc' | 'desc'>();
  private tasksService = inject(TasksService);
  userTasks = computed(() =>
    this.tasksService
      .allTasks()
      .filter((task) => task.userId === this.userId())
      .sort((a, b) => {
        if (this.order() == 'desc') {
          return a.id > b.id ? -1 : 1;
        } else {
          return a.id > b.id ? 1 : -1;
        }
      })
  );

  // Approach 2: using queryParams observable
  order = signal<'asc' | 'desc'>('desc');
  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    const subscription = this.activatedRoute.queryParams.subscribe({
      next: (params) => this.order.set(params['order']),
    });

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
}

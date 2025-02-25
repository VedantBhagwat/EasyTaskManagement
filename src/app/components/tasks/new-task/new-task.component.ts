import { Component, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../../../services/tasks.service';
import { CanDeactivateFn, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule, RouterLink],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
  cancel = output();
  userId = input.required<string>();

  title = signal('');
  summary = signal('');
  date = signal('');
  submitted = false;

  private tasksService = inject(TasksService);
  private router = inject(Router);

  onSubmitNewTask() {
    this.tasksService.addTask(
      {
        title: this.title(),
        summary: this.summary(),
        date: this.date(),
      },
      this.userId()
    );
    this.submitted = true;

    // navigate to users tasks page. {replaceUrl: true} makes sure that user don't go back
    // to new task form page
    this.router.navigate(['/users', this.userId(), 'tasks'], {
      replaceUrl: true,
    });
  }
}

export const canLeaveEditPage: CanDeactivateFn<NewTaskComponent> = (
  component
) => {
  if (component.submitted) return true;
  if (component.title() || component.summary() || component.date()) {
    return window.confirm(
      'You will loose the entered data. Do you really want to leave?'
    );
  }
  return true;
};

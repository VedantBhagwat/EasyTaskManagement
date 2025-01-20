import { Component, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../../../services/tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
  cancel = output();
  userId = input.required<string>();

  title = signal('');
  summary = signal('');
  date = signal('');

  private tasksService = inject(TasksService);

  onCancel() {
    this.cancel.emit();
  }

  onSubmitNewTask() {
    this.tasksService.addTask(
      {
        title: this.title(),
        summary: this.summary(),
        date: this.date(),
      },
      this.userId()
    );
    this.cancel.emit();
  }
}

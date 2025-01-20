import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../../../interfaces/task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
  cancel = output();
  add = output<NewTaskData>();

  title = signal('');
  summary = signal('');
  date = signal('');

  onCancel() {
    this.cancel.emit();
  }

  onSubmitNewTask() {
    this.add.emit({
      title: this.title(),
      summary: this.summary(),
      date: this.date(),
    });
  }
}

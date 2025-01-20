import { Component, Input, output } from '@angular/core';
import { type Task } from '../../../interfaces/task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  complete = output<string>();

  onCompleteTask(id: string) {
    console.log(id);
    this.complete.emit(id);
  }
}

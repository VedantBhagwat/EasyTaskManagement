import { Component, Input, output } from '@angular/core';
import { type Task } from '../../../interfaces/task.model';
import { CardComponent } from '../../../shared/card/card.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  complete = output<string>();

  onCompleteTask(id: string) {
    this.complete.emit(id);
  }
}

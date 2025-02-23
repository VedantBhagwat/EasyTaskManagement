import { Component, inject, Input } from '@angular/core';
import { type Task } from '../../../interfaces/task.model';
import { CardComponent } from '../../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TasksService } from '../../../services/tasks.service';

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  private tasksService = inject(TasksService);

  onCompleteTask(id: string) {
    this.tasksService.completeTask(id);
  }
}

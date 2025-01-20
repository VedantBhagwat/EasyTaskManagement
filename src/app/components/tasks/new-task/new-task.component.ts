import { Component, output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
  cancel = output();

  onCancel() {
    this.cancel.emit();
  }
}

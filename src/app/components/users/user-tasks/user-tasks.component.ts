import { Component, computed, inject, input } from '@angular/core';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-user-tasks',
  imports: [],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.scss',
})
export class UserTasksComponent {
  userId = input.required<string>();
  private usersService = inject(UsersService);
  userName = computed(
    () => this.usersService.users.find((user) => user.id == this.userId())?.name
  );
}

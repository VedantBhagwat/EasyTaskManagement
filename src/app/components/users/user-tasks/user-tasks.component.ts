import { Component, computed, inject, input } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
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

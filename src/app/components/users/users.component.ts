import { Component, inject } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-users',
  imports: [UserComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  private usersService = inject(UsersService);
  users = this.usersService.users;
}

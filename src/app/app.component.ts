import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './components/tasks/tasks.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'EasyTaskManagement';
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => {
      return user.id === this.selectedUserId;
    });
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}

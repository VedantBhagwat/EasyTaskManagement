import { Component, computed, input } from '@angular/core';
import { User } from '../../../interfaces/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  user = input.required<User>();

  imagePath = computed(() => 'assets/users/' + this.user().avatar);
}

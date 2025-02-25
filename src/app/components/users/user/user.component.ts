import { Component, computed, input } from '@angular/core';
import { User } from '../../../interfaces/user.model';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  imports: [RouterLink, RouterLinkActive],
})
export class UserComponent {
  user = input.required<User>();

  imagePath = computed(() => 'assets/users/' + this.user().avatar);
}

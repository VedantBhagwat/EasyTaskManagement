import {
  Component,
  computed,
  DestroyRef,
  inject,
  input,
  OnInit,
} from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.scss',
})
export class UserTasksComponent implements OnInit {
  private usersService = inject(UsersService);
  // fetching userId from URL using Signals
  /* userId = input.required<string>();
  userName = computed(
    () => this.usersService.users.find((user) => user.id == this.userId())?.name
  ); */

  // fetching userId from URL using ActivatedRoute
  private activatedRoute = inject(ActivatedRoute);
  userName = '';
  destroyRef = inject(DestroyRef);

  ngOnInit() {
    // console.log(this.activatedRoute);

    const subscription = this.activatedRoute.paramMap.subscribe({
      next: (paramMap) => {
        this.userName =
          this.usersService.users.find((u) => u.id === paramMap.get('userId'))
            ?.name || '';
      },
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}

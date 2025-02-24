import {
  Component,
  computed,
  DestroyRef,
  inject,
  input,
  OnInit,
} from '@angular/core';
import { UsersService } from '../../../services/users.service';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterLink,
  RouterOutlet,
  RouterStateSnapshot,
} from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.scss',
})
export class UserTasksComponent {
  // private usersService = inject(UsersService);
  // // fetching userId from URL using Signals
  // /* userId = input.required<string>();
  // userName = computed(
  //   () => this.usersService.users.find((user) => user.id == this.userId())?.name
  // ); */
  // // fetching userId from URL using ActivatedRoute
  // private activatedRoute = inject(ActivatedRoute);
  // userName = '';
  // destroyRef = inject(DestroyRef);
  // // get static data from routes
  // message = input.required<string>();
  // ngOnInit() {
  //   // print static data from routes
  //   console.log(this.message());
  //   // console.log(this.activatedRoute);
  //   const subscription = this.activatedRoute.paramMap.subscribe({
  //     next: (paramMap) => {
  //       this.userName =
  //         this.usersService.users.find((u) => u.id === paramMap.get('userId'))
  //           ?.name || '';
  //     },
  //   });
  //   this.destroyRef.onDestroy(() => {
  //     subscription.unsubscribe();
  //   });
  // }

  // get static data from routes
  message = input.required<string>();
  // get dynamic data from routes using ResolveFn
  userName = input.required<string>();
}

// dynamic data from routes
export const resolveUserName: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => {
  const userService = inject(UsersService);
  const userName =
    userService.users.find(
      (u) => u.id === activatedRoute.paramMap.get('userId')
    )?.name || '';
  return userName;
};

import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  output,
  Output,
  signal,
} from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';
import { User } from '../../interfaces/user.model';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  // Implementation using Property Binding and String Interpolation
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  select = output<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }

  // Implementation using signals
  /* @Input() id!: string;
  avatar = input.required<string>();
  name = input.required<string>();

  // @Output() select = new EventEmitter<string>();
  // Note: output is of type OutputEmitterRef and not a output signal
  select = output<string>();

  selectedUser = signal(DUMMY_USERS[randomIndex]);
  imagePath = computed(() => 'assets/users/' + this.avatar());

  onSelectUser() {
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
    this.select.emit(this.id);
  } */
}

import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../domain/user';
import {catchError} from 'rxjs/operators';
import {EMPTY, Observable, of} from 'rxjs';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  open = false;

  register = false;

  model: User;

  loading: boolean;

  error: Observable<string>;

  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {
    this.error = authService.error;
  }

  ngOnInit() {
    this.reset();
  }

  reset() {
    this.register = false;
    this.model = {
      username: '',
    };
  }

  onSubmit() {
    if (this.loading) {
      return;
    }
    if (this.register) {
      this.loading = true;
      this.userService.create(this.model).pipe(
        catchError(() => of(null)),
      ).subscribe(() => {
        this.loading = false;
        this.reset();
      });
    } else {
      this.authService.setCredentials({
        username: this.model.username,
        password: this.model.password,
      });
      this.reset();
    }
  }

}

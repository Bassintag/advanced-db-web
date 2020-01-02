import {Component, OnInit} from '@angular/core';
import {AuthService, Credentials} from '../services/auth.service';
import {Observable} from 'rxjs';
import {User} from '../domain/user';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-logged-in-form',
  templateUrl: './logged-in-form.component.html',
  styleUrls: ['./logged-in-form.component.css']
})
export class LoggedInFormComponent implements OnInit {

  readonly credentialsObservable: Observable<Credentials>;

  readonly meObservable: Observable<User>;

  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {
    this.credentialsObservable = authService.credentials;
    this.meObservable = userService.meObservable;
  }

  ngOnInit() {
  }

  logOut() {
    this.authService.setCredentials(null);
  }

}

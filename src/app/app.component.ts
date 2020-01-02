import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService, Credentials} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly credentialsObservable: Observable<Credentials>;

  constructor(
    private readonly authService: AuthService,
  ) {
    this.credentialsObservable = authService.credentials;
  }
}

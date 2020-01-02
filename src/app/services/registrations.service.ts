import {Injectable} from '@angular/core';
import {ResourceService} from './resource.service';
import {Registration} from '../domain/registration';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService extends ResourceService<Registration> {

  constructor(
    httpClient: HttpClient,
    authService: AuthService,
  ) {
    super(httpClient, authService, '/registrations');
  }
}

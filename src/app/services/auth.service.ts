import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {User} from '../domain/user';
import {resolveApiUrl} from './api-utils';
import {HttpClient} from '@angular/common/http';

export interface Credentials {

  username: string;

  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly credentialsSubject: BehaviorSubject<Credentials | null>;

  private readonly errorSubject: Subject<string>;

  get credentials(): Observable<Credentials> {
    return this.credentialsSubject.asObservable();
  }

  get error(): Observable<string> {
    return this.errorSubject.asObservable();
  }

  constructor(
    private readonly httpClient: HttpClient,
  ) {
    const stored = localStorage.getItem('auth');
    const existing = stored == null ? null : JSON.parse(stored) as Credentials;
    this.credentialsSubject = new BehaviorSubject<Credentials>(existing);
    this.errorSubject = new Subject<string>();
    this.credentials.subscribe(c => localStorage.setItem('auth', JSON.stringify(c)));
  }

  setCredentials(credentials: Credentials) {
    if (credentials != null) {
      const header = `Basic ${btoa(`${credentials.username}:${credentials.password}`)}`;
      this.httpClient.get<User>(resolveApiUrl('/users/me/details'), {headers: {Authorization: header}}).subscribe(
        () => this.credentialsSubject.next(credentials),
        () => this.errorSubject.next('Invalid user / password'),
      );
    } else {
      this.credentialsSubject.next(credentials);
    }
  }
}

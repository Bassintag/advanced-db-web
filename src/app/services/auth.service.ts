import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

export interface Credentials {

  username: string;

  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly credentialsSubject: BehaviorSubject<Credentials | null>;

  get credentials(): Observable<Credentials> {
    return this.credentialsSubject.asObservable();
  }

  constructor() {
    const stored = localStorage.getItem('auth');
    const existing = stored == null ? null : JSON.parse(stored) as Credentials;
    console.log('e', existing);
    this.credentialsSubject = new BehaviorSubject<Credentials>(existing);
    this.credentials.subscribe(c => localStorage.setItem('auth', JSON.stringify(c)));
  }

  setCredentials(credentials: Credentials) {
    this.credentialsSubject.next(credentials);
  }
}

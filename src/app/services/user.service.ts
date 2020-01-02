import {Injectable} from '@angular/core';
import {ResourceService} from './resource.service';
import {User} from '../domain/user';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';
import {resolveApiUrl} from './api-utils';
import {Observable} from 'rxjs';
import {flatMap, map, shareReplay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ResourceService<User> {

  public readonly meObservable: Observable<User>;

  constructor(
    httpClient: HttpClient,
    authService: AuthService,
  ) {
    super(httpClient, authService, '/users');
    this.meObservable = authService.credentials.pipe(
      map(c => c && `Basic ${btoa(`${c.username}:${c.password}`)}`),
      flatMap(h => h && httpClient.get<User>(resolveApiUrl('/users/me/details'), {headers: {Authorization: h}})),
      shareReplay(1),
    );
  }
}

import {Injectable} from '@angular/core';
import {ResourceService} from './resource.service';
import {Author} from '../domain/author';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorService extends ResourceService<Author> {

  constructor(
    httpClient: HttpClient,
    authService: AuthService,
  ) {
    super(httpClient, authService, '/authors');
  }
}

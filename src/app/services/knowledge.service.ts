import {Injectable} from '@angular/core';
import {ResourceService} from './resource.service';
import {Knowledge} from '../domain/knowledge';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class KnowledgeService extends ResourceService<Knowledge> {

  constructor(
    httpClient: HttpClient,
    authService: AuthService,
  ) {
    super(httpClient, authService, '/knowledges');
  }
}

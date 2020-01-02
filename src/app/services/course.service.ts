import {Injectable} from '@angular/core';
import {ResourceService} from './resource.service';
import {Course} from '../domain/course';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService extends ResourceService<Course> {

  constructor(
    httpClient: HttpClient,
    authService: AuthService,
  ) {
    super(httpClient, authService, '/courses');
  }
}

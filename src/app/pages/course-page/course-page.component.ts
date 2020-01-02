import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Course} from '../../domain/course';
import {flatMap, map} from 'rxjs/operators';
import {CourseService} from '../../services/course.service';
import {AuthService} from '../../services/auth.service';
import {RegistrationService} from '../../services/registrations.service';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit {

  private readonly courseObservable: Observable<Course>;

  registering: boolean;

  registered: boolean;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly courseService: CourseService,
    private readonly registrationSerivce: RegistrationService,
    private readonly authService: AuthService,
  ) {
    this.courseObservable = this.activatedRoute.params.pipe(
      map(p => p.id),
      flatMap(id => courseService.getById(id)),
    );
  }

  ngOnInit() {
    this.registering = false;
    this.registered = false;
  }

  register(course: Course) {
    this.registrationSerivce.create({
      course,
    }).subscribe(() => {
      this.registering = false;
      this.registered = true;
    });
    this.registering = true;
  }
}

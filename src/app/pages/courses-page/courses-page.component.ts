import {Component, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, combineLatest, Observable, Subject} from 'rxjs';
import {Course} from '../../domain/course';
import {Page} from '../../domain/page';
import {CourseService} from '../../services/course.service';
import {map, switchMap, tap} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit, OnDestroy {

  courseObservable: Observable<Page<Course>>;

  loading: boolean;

  private readonly pageSubject: Subject<number>;

  private readonly authorIdObservable: Observable<string>;
  private readonly topicIdObservable: Observable<string>;

  constructor(
    private readonly courseService: CourseService,
    private readonly activatedRoute: ActivatedRoute,
  ) {
    this.pageSubject = new BehaviorSubject<number>(0);
    this.authorIdObservable = activatedRoute.queryParams.pipe(
      map(p => p.authorId),
    );
    this.topicIdObservable = activatedRoute.queryParams.pipe(
      map(p => p.topicId),
    );
  }

  ngOnInit() {
    this.courseObservable = combineLatest([this.pageSubject, this.authorIdObservable, this.topicIdObservable]).pipe(
      tap(() => this.loading = true),
      switchMap(([p, aId, tId]) => this.courseService.getMany(p, 20, {authors: aId, knowledges: tId})),
      tap(() => this.loading = false),
    );
  }

  goToPage(page: number) {
    this.pageSubject.next(page);
  }

  ngOnDestroy(): void {
    this.pageSubject.complete();
  }

}

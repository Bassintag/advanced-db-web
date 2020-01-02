import {Component, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Page} from '../../domain/page';
import {Author} from '../../domain/author';
import {AuthorService} from '../../services/author.service';
import {flatMap} from 'rxjs/operators';

@Component({
  selector: 'app-authors-page',
  templateUrl: './authors-page.component.html',
  styleUrls: ['./authors-page.component.css']
})
export class AuthorsPageComponent implements OnInit, OnDestroy {

  authorsObservable: Observable<Page<Author>>;

  pageSubject: Subject<number>;

  constructor(
    private readonly authorService: AuthorService,
  ) {
  }

  ngOnInit() {
    this.pageSubject = new BehaviorSubject<number>(0);
    this.authorsObservable = this.pageSubject.pipe(
      flatMap(p => this.authorService.getMany(p, 24)),
    );
  }

  ngOnDestroy(): void {
    this.pageSubject.complete();
  }

  gotToPage(page: number) {
    this.pageSubject.next(page);
  }

}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Page} from '../../domain/page';
import {Knowledge} from '../../domain/knowledge';
import {User} from '../../domain/user';
import {UserService} from '../../services/user.service';
import {flatMap} from 'rxjs/operators';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit, OnDestroy {

  usersObservable: Observable<Page<User>>;

  pageSubject: Subject<number>;

  constructor(
    private readonly userService: UserService,
  ) {
  }

  ngOnInit() {
    this.pageSubject = new BehaviorSubject<number>(0);
    this.usersObservable = this.pageSubject.pipe(
      flatMap((page) => this.userService.getMany(page, 24)),
    );
  }

  ngOnDestroy(): void {
    this.pageSubject.complete();
  }

  goToPage(page: number) {
    this.pageSubject.next(page);
  }

}

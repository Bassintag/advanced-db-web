import {Component, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Knowledge} from '../../domain/knowledge';
import {Page} from '../../domain/page';
import {KnowledgeService} from '../../services/knowledge.service';
import {flatMap} from 'rxjs/operators';

@Component({
  selector: 'app-topics-page',
  templateUrl: './topics-page.component.html',
  styleUrls: ['./topics-page.component.css']
})
export class TopicsPageComponent implements OnInit, OnDestroy {

  topicsObservable: Observable<Page<Knowledge>>;

  pageSubject: Subject<number>;

  constructor(
    private readonly knowledgeService: KnowledgeService,
  ) {
  }

  ngOnInit() {
    this.pageSubject = new BehaviorSubject<number>(0);
    this.topicsObservable = this.pageSubject.pipe(
      flatMap((p) => this.knowledgeService.getMany(p, 24)),
    );
  }

  ngOnDestroy(): void {
    this.pageSubject.complete();
  }

  gotToPage(page: number) {
    this.pageSubject.next(page);
  }

}

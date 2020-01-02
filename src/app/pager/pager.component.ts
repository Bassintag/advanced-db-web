import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Page} from '../domain/page';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit {

  @Input() page: Page;

  @Output() readonly pageChange = new EventEmitter<number>();

  get first(): boolean {
    return !this.page || this.page.page === 0;
  }

  get last(): boolean {
    return !this.page || this.page.page === this.totalPages - 1;
  }

  get totalPages(): number {
    return this.page && Math.ceil(this.page.total / this.page.size);
  }

  constructor() {
  }

  ngOnInit() {
  }

  changePage(page: number) {
    this.pageChange.emit(page);
  }
}

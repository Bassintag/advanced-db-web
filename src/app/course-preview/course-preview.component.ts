import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../domain/course';

@Component({
  selector: 'app-course-preview',
  templateUrl: './course-preview.component.html',
  styleUrls: ['./course-preview.component.css']
})
export class CoursePreviewComponent implements OnInit {

  @Input() course: Course;

  constructor() {
  }

  ngOnInit() {
  }

}

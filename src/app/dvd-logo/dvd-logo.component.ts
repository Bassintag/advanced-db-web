import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {interval} from 'rxjs';

@Component({
  selector: 'app-dvd-logo',
  templateUrl: './dvd-logo.component.html',
  styleUrls: ['./dvd-logo.component.css']
})
export class DvdLogoComponent implements OnInit {

  x: number;
  y: number;
  hue: number;

  private xDir = 1;
  private yDir = 1;

  private innerWidth: number;
  private innerHeight: number;

  constructor(
    private readonly ref: ElementRef,
  ) {
  }

  ngOnInit() {
    this.x = Math.random() * innerWidth;
    this.y = Math.random() * innerHeight;
    this.hue = 0;
    console.log(this.x, ' ', this.y);
    interval(1000 / 60).subscribe(() => {
      const width = 64;
      if (this.x < 0) {
        this.xDir = 1;
        this.hue += 135;
      } else if (this.x + width > innerWidth) {
        this.xDir = -1;
        this.hue += 135;
      }
      this.x += this.xDir * 2;
      const height = this.ref.nativeElement.offsetHeight;
      if (this.y < 0) {
        this.yDir = 1;
        this.hue += 135;
      } else if (this.y + height * 2 > innerHeight) {
        this.yDir = -1;
        this.hue += 135;
      }
      this.y += this.yDir * 2;
    });
  }

  @HostListener('window:resize')
  onResize() {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
  }

}

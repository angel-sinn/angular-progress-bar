import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string = 'PENNY FE DEV TEST';
  isLoading: boolean = false;
  loadingTime: number = 0;

  ngOnInit() {
    this.isLoading = true;
    this.loadingTime = this.randomInt(4, 8) * 1000;
    setTimeout(() => (this.isLoading = false), this.loadingTime);
  }

  randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

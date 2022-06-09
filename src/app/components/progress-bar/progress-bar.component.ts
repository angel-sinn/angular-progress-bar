import {
  Component,
  Input,
  OnInit,
  OnChanges,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  SimpleChange,
} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressBarComponent implements OnInit, OnChanges {
  @Input() isLoading: boolean = false;
  @Input() loadingTime: number = 0;

  showProgressBar: boolean = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    window.onload = () => {
      this.showProgressBar = true;
      console.log('this.loadingTime', this.loadingTime);
      this.initProgressBar(this.loadingTime);
    };
  }

  ngOnChanges({ isLoading }: { isLoading: SimpleChange }) {
    if (isLoading.currentValue) {
      this.showProgressBar = true;
    } else {
      this.showProgressBar = false;
    }
  }

  initProgressBar(loadingTime: number): void {
    const progressBar = document.querySelector(
      '.progress__loading'
    ) as HTMLElement;
    const progressBarText = document.querySelector(
      '.progress__loading-text'
    ) as HTMLElement;

    let width = 0;
    const endWidth = 100;

    const interval = setInterval(() => {
      if (width < endWidth) {
        width += 1;
        progressBar.style.width = width + '%';
        progressBarText.innerHTML = `Loading ${width}%`;
      } else {
        clearInterval(interval);
      }
    }, loadingTime / 100);
  }
}

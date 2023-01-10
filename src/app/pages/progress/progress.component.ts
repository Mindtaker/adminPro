import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent {
  progressOne: number = 25;
  progressTwo: number = 35;

  get getProgressOne(): string {
    return `${this.progressOne}%`;
  }

  get getProgressTwo(): string {
    return `${this.progressTwo}%`;
  }
}

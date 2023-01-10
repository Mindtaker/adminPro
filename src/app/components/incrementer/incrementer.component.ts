import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styles: [],
})
export class IncrementerComponent implements OnInit {
  @Input() progress: number = 50;
  @Input() btnClass: string = 'btn-primary';

  @Output() progressChanged: EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  changeProgress(progress: number) {
    if (this.progress + progress >= 0 && this.progress + progress <= 100) {
      this.progress += progress;
      this.progressChanged.emit(this.progress);
    }
  }

  onChange(value: number) {
    if (value >= 0 && value <= 100) {
      this.progressChanged.emit(value);
    }
  }
}

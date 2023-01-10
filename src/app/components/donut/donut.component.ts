import { Component, Input } from '@angular/core';
import { ChartData, ChartEvent } from 'chart.js';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styles: [],
})
export class DonutComponent {
  private readonly colors: string[] = ['#6857E6', '#009FEE', '#F02059'];
  // Doughnut
  @Input('labels') public doughnutChartLabels: string[] = [
    'Label 1',
    'Label 2',
    'Label 3',
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [350, 450, 100],
        backgroundColor: this.colors,
      },
    ],
  };
  @Input() title: string = 'Donut Chart';
  @Input() data: number[] = [];

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: ChartEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  ngOnChanges(): void {
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [{ data: this.data, backgroundColor: this.colors }],
    };
  }
}

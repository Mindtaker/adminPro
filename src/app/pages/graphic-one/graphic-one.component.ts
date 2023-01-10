import { Component } from '@angular/core';

@Component({
  selector: 'app-graphic-one',
  templateUrl: './graphic-one.component.html',
  styles: [],
})
export class GraphicOneComponent {
  public labelsOne: string[] = ['Bread', 'Soda', 'Tacos'];
  public dataOne: number[] = [10, 15, 40];

  public labelsTwo: string[] = ['Fish', 'Beef', 'Pork Meat'];
  public dataTwo: number[] = [99, 85, 42];

  public labelsThree: string[] = [
    'Gasoline',
    'Storage Expenses',
    'Miscellaneous',
  ];
  public dataThree: number[] = [33, 710, 78];

  public labelsFour: string[] = ['Yerba', 'Oil', 'Wine'];
  public dataFour: number[] = [55, 66, 22];
}

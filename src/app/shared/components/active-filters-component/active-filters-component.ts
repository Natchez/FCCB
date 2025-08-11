import { Component } from '@angular/core';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {
  faFilterCircleXmark,
  faClose
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-active-filters-component',
  imports: [
    FaIconComponent
  ],
  templateUrl: './active-filters-component.html',
  styleUrl: './active-filters-component.css'
})
export class ActiveFiltersComponent {

  // filters: string[] = ['Food Aversions / Allergies', 'Vegetarian', 'Cook Time: <5hrs','Difficulty: Medium','Vietnamese'];
  filters: string[] = [];

  protected readonly faFilterCircleXmark = faFilterCircleXmark;
  protected readonly faClose = faClose;

}

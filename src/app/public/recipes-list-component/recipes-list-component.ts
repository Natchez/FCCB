import { Component } from '@angular/core';
import {
  ActiveFiltersComponent
} from '../../shared/components/active-filters-component/active-filters-component';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';
import {
  RecipeCardComponent
} from '../../shared/components/recipe-card-component/recipe-card-component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-recipes-list-component',
  imports: [ActiveFiltersComponent, FaIconComponent, RecipeCardComponent, RouterLink],
  templateUrl: './recipes-list-component.html',
  styleUrl: './recipes-list-component.css'
})
export class RecipesListComponent {
  faCaretDown = faCaretDown;

}

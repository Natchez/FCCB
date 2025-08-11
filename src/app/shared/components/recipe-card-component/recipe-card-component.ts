import {Component} from '@angular/core';
import {
  faBowlFood,
  faClipboardList,
  faShareNodes
} from '@fortawesome/free-solid-svg-icons';
import {
  faClock,
  faBookmark,
} from '@fortawesome/free-regular-svg-icons';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-recipe-card-component',
  imports: [
    FaIconComponent
  ],
  templateUrl: './recipe-card-component.html',
  styleUrl: './recipe-card-component.css'
})
export class RecipeCardComponent {

  faBowlFood = faBowlFood
  faClock = faClock
  faBookmark = faBookmark
  faClipboardList = faClipboardList
  faShareNodes = faShareNodes
}

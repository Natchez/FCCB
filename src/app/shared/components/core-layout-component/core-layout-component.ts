import {Component, Input} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {
  faKitchenSet,
  faFilter,
  faSearch,
  faAdd,
  faEdit,
  faEllipsisV,
  faUser,
  faList,
  faArrowLeft,
  faFilterCircleXmark
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-core-layout-component',
  imports: [
    RouterOutlet,
    FontAwesomeModule
  ],
  templateUrl: './core-layout-component.html',
  styleUrl: './core-layout-component.css'
})
export class CoreLayoutComponent {

  // App Icons
  @Input() public headerIcons: string[] = [];

  faKitchen = faKitchenSet;
  faFilter = faFilter;
  faSearch = faSearch;
  faAdd = faAdd;
  faEdit = faEdit;
  faEllipsisV = faEllipsisV;
  faUser = faUser;
  faList = faList;
  faArrowLeft = faArrowLeft;
  faFilterCircleXmark = faFilterCircleXmark;
}

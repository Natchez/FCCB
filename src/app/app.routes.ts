import {Routes} from '@angular/router';
import {authGuard} from './core/guards/auth.guard';
import {
  CoreLayoutComponent
} from './shared/components/core-layout-component/core-layout-component';
import {
  RecipesListComponent
} from './public/recipes-list-component/recipes-list-component';
import {
  RecipeViewComponent
} from './public/recipe-view-component/recipe-view-component';
import {
  MyRecipesComponent
} from './private/my-recipes-component/my-recipes-component';
import {
  CreateRecipeComponent
} from './private/create-recipe-component/create-recipe-component';
import {
  RecipeEditComponent
} from './private/recipe-edit-component/recipe-edit-component';
import {MyShoppingList} from './private/my-shopping-list/my-shopping-list';
import {
  EditShoppingList
} from './private/edit-shopping-list/edit-shopping-list';

import {LoginComponent} from './public/login-component/login-component';
import {
  RegisterComponent
} from './public/register-component/register-component';
import {
  ForgotPasswordComponent
} from './public/forgot-password-component/forgot-password-component';

export const routes: Routes = [

  {
    path: '',
    component: CoreLayoutComponent,
    children: [
      // Public
      {path: '', component: RecipesListComponent},
      {path: 'recipes/:recipeId', component: RecipeViewComponent},

      // Private routes (Authguarded)
      {
        path: 'my-recipes',
        canActivate: [authGuard],
        children: [
          {path: '', component: MyRecipesComponent},
          {path: 'new', component: CreateRecipeComponent},
          {
            path: 'edit/:recipeId', component: RecipeEditComponent
          },
        ]
      },
      {
        path: 'shopping-list',
        canActivate: [authGuard],
        children: [
          {path: '', component: MyShoppingList},
          {path: 'edit/:shoppingListId', component: EditShoppingList},
        ]
      },
    ]
  },


  // Auth
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},


  // Fallback
  {path: '**', redirectTo: ''}
];

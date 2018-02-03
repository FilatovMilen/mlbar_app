import {Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {RecipeComponent} from './recipe/recipe.component';

export const rootRouterConfig: Routes = [
    {path: '', component: HomeComponent},
    {path: 'recipe', component: RecipeComponent},
];


import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router';
import {rootRouterConfig} from './app.routes';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {HomeComponent} from './home/home.component';
import {RecipeComponent} from './recipe/recipe.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        RecipeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forRoot(rootRouterConfig, {useHash: true})
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}

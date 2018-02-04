import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'home',
    styleUrls: ['./home.component.css'],
    templateUrl: './home.component.html'
})
export class HomeComponent {

    router: Router;

    constructor(_router: Router) {
        this.router = _router;
    }

    navigateToRecipeGen() {
        this.router.navigateByUrl('/recipe');
    }
}

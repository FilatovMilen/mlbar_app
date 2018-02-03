import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import CustomValidators from '../forms/CustomValidators';

@Component({
    selector: 'recipe',
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe-component.css']
})
export class RecipeComponent implements OnInit {
    contactForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.contactForm = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, CustomValidators.validateEmail]],
            content: ['', [Validators.required, Validators.minLength(10)]]
        });
    }

    submitForm(): void {
        console.log(this.contactForm);
    }
}

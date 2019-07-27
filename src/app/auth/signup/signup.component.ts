import { Component, OnInit} from '@angular/core';
import { AuthService} from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    signUpForm: FormGroup;
    errorMessage: string;

    constructor( private authService: AuthService,
                 private formBuilder: FormBuilder,
                 private router: Router ) {

    }

    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.signUpForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
        });
    }

    onSubmit() {
        const email = this.signUpForm.get('email').value;
        const password = this.signUpForm.get('password').value;
        this.authService.createNewUser(email, password).then(
            () => {
                this.router.navigate(['/lipstick-list']);
            },
            (error) => {
                this.errorMessage = error;
            }
        );
    }

}

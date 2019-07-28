import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LipstickService} from '../../services/lipstick.service';
import {Router} from '@angular/router';
import {Lipstick} from '../../models/lipstick.model';

@Component({
    selector: 'app-lipstick-form',
    templateUrl: './lipstick-form.component.html',
    styleUrls: ['./lipstick-form.component.scss']
})
export class LipstickFormComponent implements OnInit {

    lipstickForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private lipstickService: LipstickService, private router: Router) {
    }

    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.lipstickForm = this.formBuilder.group({
            name: ['', Validators.required],
            color: ['', Validators.required]
        });
    }

    // Save new Lipstick
    onSaveLipstick() {
        const name = this.lipstickForm.get('name').value;
        const color = this.lipstickForm.get('color').value;
        const newLipstick = new Lipstick(name, color);
        this.lipstickService.createNewLipstick(newLipstick);
        this.router.navigate(['/lipstick-list']);
    }

}

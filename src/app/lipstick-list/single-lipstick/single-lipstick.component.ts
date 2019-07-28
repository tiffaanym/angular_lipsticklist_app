import {Component, OnInit} from '@angular/core';
import {Lipstick} from '../../models/lipstick.model';
import {ActivatedRoute, Router} from '@angular/router';
import {LipstickService} from '../../services/lipstick.service';

@Component({
    selector: 'app-single-lipstick',
    templateUrl: './single-lipstick.component.html',
    styleUrls: ['./single-lipstick.component.scss']
})
export class SingleLipstickComponent implements OnInit {

    lipstick: Lipstick;

    constructor(private route: ActivatedRoute,
                private lipstickService: LipstickService,
                private router: Router) {
    }

    ngOnInit() {
        // Temporary Lipstick before charging
        this.lipstick = new Lipstick('', '');
        const id = this.route.snapshot.params['id'];
        // Charging real lipstick from serveur
        this.lipstickService.getSingleLipstick(+id).then(
            (lipstick: Lipstick) => {
                this.lipstick = lipstick;
            }
        );
    }

    onBack() {
        this.router.navigate(['/lipstick-list']);
    }


}

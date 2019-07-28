import {Component, OnDestroy, OnInit} from '@angular/core';
import {Lipstick} from '../models/lipstick.model';
import {Subscription} from 'rxjs';
import {LipstickService} from '../services/lipstick.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-lipstick-list',
    templateUrl: './lipstick-list.component.html',
    styleUrls: ['./lipstick-list.component.scss']
})
export class LipstickListComponent implements OnInit, OnDestroy {

    lipsticks: Lipstick[];
    lipstickSubscription: Subscription;

    constructor(private lipstickService: LipstickService, private router: Router) {
    }

    ngOnInit() {
        this.lipstickSubscription = this.lipstickService.lipstickSubject.subscribe(
            (lipsticks: Lipstick[]) => {
                this.lipsticks = lipsticks;
            }
        );

        this.lipstickService.getLipsticks();
        this.lipstickService.emitLipsticks();
    }

    onNewLipstick() {
        this.router.navigate(['/lipstick-list', 'new']);
    }

    onDeleteLipstick(lipstick: Lipstick) {
        this.lipstickService.removeLipstick(lipstick);
    }

    onViewLipstick(id: number) {
        this.router.navigate(['/lipstick-list','view',id]);
    }

    ngOnDestroy() {
        this.lipstickSubscription.unsubscribe();
    }

}

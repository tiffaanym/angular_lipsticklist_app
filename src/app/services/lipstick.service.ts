import {Injectable} from '@angular/core';
import {Lipstick} from '../models/lipstick.model';
import {Subject} from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
    providedIn: 'root'
})

export class LipstickService {

    lipsticks: Lipstick[] = [];
    lipstickSubject = new Subject<Lipstick[]>();

    constructor() {
    }

    emitLipsticks() {
        this.lipstickSubject.next(this.lipsticks);
    }

    saveLipsticks() {
        firebase.database().ref('/lipsticks').set(this.lipsticks);

    }

    getLipsticks() {
        firebase.database().ref('/lipsticks').on('value', (data) => {
            this.lipsticks = data.val() ? data.val() : [];
            this.emitLipsticks();
        });
    }

    getSingleLipstick(id: number) {
        return new Promise(
            (resolve, reject) => {
                firebase.database().ref('/lipsticks' + id).once('value').then(
                    (data) => {
                        resolve(data.val());
                    },
                    (error) => {
                        reject(error);
                    }
                );
            }
        );
    }

    createNewLipstick(newLipstick: Lipstick) {
        this.lipsticks.push(newLipstick);
        this.saveLipsticks();
        this.emitLipsticks();
    }

    removeLipstick(lipstick: Lipstick) {
        const lipstickIndexToRemove = this.lipsticks.findIndex(
            (lipstickEl) => {
                if (lipstickEl === lipstick) {
                    return true;
                }
            }
        );
        this.lipsticks.splice(lipstickIndexToRemove, 1);
        this.saveLipsticks();
        this.emitLipsticks();
    }
}

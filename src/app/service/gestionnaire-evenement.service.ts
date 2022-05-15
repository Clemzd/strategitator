import {Injectable} from '@angular/core';
import {Observable, Observer, Subscription} from 'rxjs';
import {filter, share} from 'rxjs/operators';
import {Evenement} from "@models/event.model";

// tslint:disable:no-any
/**
 * Une classe utilitaire pour gérer les événements RX
 */
@Injectable({
  providedIn: 'root'
})
export class GestionnaireEvenementService {

  observable: Observable<any>;
  observer?: Observer<any>;

  constructor() {
    this.observable = new Observable((observer: Observer<any>) => {
      this.observer = observer;
    }).pipe(share());
  }

  /**
   * Méthode pour se désabonner de l'abonnement
   */
  static destroy(subscriber: Subscription) {
    if (!!subscriber) {
      subscriber.unsubscribe();
    }
  }

  /**
   * Méthode de diffusion de l'événement à l'observateur
   */
  broadcast(event: Evenement) {
    if (this.observer) {
      this.observer.next(event);
    }
  }

  /**
   * Méthode pour s'abonner à un événement avec callback
   */
  subscribe(eventName: string, callback: any) {
    return this.observable
      .pipe(
        filter(event => {
          return event.name === eventName;
        })
      )
      .subscribe(callback);
  }
}

import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { RealTimeConfig, RealTimeService } from 'akita-ng-fire';
import { PfingosState, PfingosStore } from './pfingos.store';

@Injectable({ providedIn: 'root' })
@RealTimeConfig({ nodeName: 'pfingos' })
export class PfingosService extends RealTimeService<PfingosState> {

  constructor(store: PfingosStore, db: AngularFireDatabase) {
    super(store, 'pfingos', db);
    this.syncNodeWithStore().subscribe();
  }

}
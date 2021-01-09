import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { Pfingo } from './pfingo.model';

export interface PfingosState extends EntityState<Pfingo, string>, ActiveState<string> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'pfingos' })
export class PfingosStore extends EntityStore<PfingosState> {

  constructor() {
    super();
  }

}

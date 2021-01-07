import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { RealTimeConfig, RealTimeService } from 'akita-ng-fire';
import { TodosState, TodosStore } from './todos.store';

@Injectable({ providedIn: 'root' })
@RealTimeConfig({ nodeName: 'todos' })
export class TodosService extends RealTimeService<TodosState> {

  constructor(store: TodosStore, db: AngularFireDatabase) {
    super(store, 'todos', db);
    this.syncNodeWithStore().subscribe();
  }

}
// import { Injectable } from '@angular/core';
// import { CollectionConfig, CollectionService } from 'akita-ng-fire';
// import { TodosState, TodosStore } from './todos.store';

// @Injectable({ providedIn: 'root' })
// @CollectionConfig({ path: 'todos' })
// export class TodosService extends CollectionService<TodosState> {

//   constructor(store: TodosStore) {
//     super(store);
//   }

// }

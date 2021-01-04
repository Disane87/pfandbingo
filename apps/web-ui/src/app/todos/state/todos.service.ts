import { Injectable } from '@angular/core';
import { TodosStore, TodosState } from './todos.store';
import { CollectionConfig, CollectionService } from 'akita-ng-fire';

@Injectable({ providedIn: 'root' })
@CollectionConfig({ path: 'todos' })
export class TodosService extends CollectionService<TodosState> {

  constructor(store: TodosStore) {
    super(store);
  }

}

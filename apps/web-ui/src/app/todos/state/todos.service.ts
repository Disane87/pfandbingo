import { Injectable } from '@angular/core';
import { CollectionConfig, CollectionService } from 'akita-ng-fire';
import { TodosState, TodosStore } from './todos.store';

@Injectable({ providedIn: 'root' })
@CollectionConfig({ path: 'todos', })
export class TodosService extends CollectionService<TodosState> {

  constructor(store: TodosStore) {
    super(store);
  }

}

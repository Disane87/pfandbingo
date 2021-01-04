import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import { EntityState, ActiveState, EntityStore, StoreConfig } from '@datorama/akita';

export interface TodosState extends EntityState<Todo, string>, ActiveState<string> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'todos' })
export class TodosStore extends EntityStore<TodosState> {

  constructor() {
    super();
  }

}


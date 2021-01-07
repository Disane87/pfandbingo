import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import firebase from 'firebase';
import { NzMessageService } from 'ng-zorro-antd/message';
import { catchError } from 'rxjs/operators';
import { TodosState, TodosStore } from './todos.store';

@Injectable({ providedIn: 'root' })
export class TodosQuery extends QueryEntity<TodosState> {

  selectMine$ = this.selectAll().pipe(
    catchError((err: firebase.FirebaseError) => {
      this.msg.error(err.message)
      return err.message;
    })
  )

  constructor(protected store: TodosStore, private msg: NzMessageService) {
    super(store);



  }

}

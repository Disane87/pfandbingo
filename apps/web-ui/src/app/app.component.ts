import { Component } from '@angular/core';
import { TodosService } from './todos/state/todos.service';
import { TodosQuery } from './todos/state/todos.query';
import { Observable } from 'rxjs';
import { Todo } from './todos/state/todo.model';

@Component({
  selector: 'pfandbingo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'web-ui';

  public todos$: Observable<Todo[]>;
  constructor(private service: TodosService, private query: TodosQuery) { }

  ngOnInit() {
    // Subscribe to the collection
    this.service.syncCollection().subscribe();
    // Get the list from the store
    this.todos$ = this.query.selectAll();
  }
}

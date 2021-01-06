import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthQuery } from './auth/state/auth.query';
import { Todo } from './todos/state/todo.model';
import { TodosQuery } from './todos/state/todos.query';
import { TodosService } from './todos/state/todos.service';

@Component({
  selector: 'pfandbingo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'web-ui';

  public todos$: Observable<Todo[]>;
  constructor(private service: TodosService, private query: TodosQuery, private auth: AuthQuery) { }
  public loggedIn$ = this.auth.profile$;

  ngOnInit() {
    // Subscribe to the collection
    this.service.syncCollection().subscribe();
    // Get the list from the store
    this.todos$ = this.query.selectAll();
  }
}

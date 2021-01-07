import { animate, animateChild, query, stagger, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthQuery } from '../../auth/state/auth.query';
import { TodosQuery } from '../state/todos.query';
import { TodosService } from '../state/todos.service';

const animationTime = 100;

@Component({
  selector: 'pfandbingo-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    // nice stagger effect when showing existing elements
    trigger('list', [
      transition(':increment', [
        // child animation selector + stagger
        query('@items',
          stagger(animationTime / 2, animateChild()),
          { optional: true, }
        )
      ]),
    ]),
    trigger('items', [
      // cubic-bezier for a tiny bouncing feel
      transition(':enter', [
        style({ opacity: 0 }),
        animate(animationTime)
      ]),
      transition(':leave', [
        animate(animationTime, style({ opacity: 0 }))
      ]),
    ])
  ],
})
export class TodosComponent implements OnInit {

  constructor(private todosQuery: TodosQuery, private todosService: TodosService, private auth: AuthQuery) { }

  todos$ = this.todosQuery.selectAll({
    filterBy: todo => todo.userId == this.auth.getValue().uid
  });

  todoName: string;

  ngOnInit(): void {
  }

  remove(id: string) {
    this.todosService.remove(id);
  }

  submit() {
    if (this.todoName)
      this.todosService.add({
        description: this.todoName,
        userId: this.auth.getValue().uid,
      }).then(() => {
        this.todoName = null;
      })
  }

}

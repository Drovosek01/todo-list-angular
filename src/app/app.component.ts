import { Component, OnInit } from '@angular/core';
import { Task, Tasks } from './views/todos/todo-form/task.model';
import { Store } from '@ngrx/store';
import { AppState } from './redux/app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public tasks: Task[] = [];
  public tasksState: Observable<Tasks>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    // this.store.select('taskPage').subscribe(({tasks}) => this.tasks = tasks);
    this.tasksState = this.store.select('taskPage');
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { Task, Tasks } from '../todo-form/task.model';
import { Observable } from 'rxjs';
import { TasksService } from '../../../redux/tasks.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../redux/app.state';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  public tasks: Observable<Task[]> = this._store$.map((state) => {
    return state.taskPage.tasks;
  });

  constructor(private service: TasksService, private readonly _store$: Store<AppState>) {
    this.service.loadTasks();
  }

  ngOnInit() {
  }

  onLoad() {
    this.service.loadTasks();
    }

}

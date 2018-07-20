import { Component, OnInit } from '@angular/core';
import { Task, Tasks } from '../todo-form/task.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../redux/app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-adding-task',
  templateUrl: './adding-task.component.html',
  styleUrls: ['./adding-task.component.css']
})
export class AddingTaskComponent implements OnInit {

  public tasks: Task[] = [];
  public tasksState: Observable<Tasks>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    // this.store.select('taskPage').subscribe(({tasks}) => this.tasks = tasks);
    this.tasksState = this.store.select('taskPage');
  }

  // onAdd(task: Task) {
  //   this.tasks.push(task);
  // }

  onDelete(task: Task) {
    // this.tasks = this.tasks.filter(t => t.id !== task.id);
    this.tasks = this.tasks.splice(task.id, 1);
  }

}

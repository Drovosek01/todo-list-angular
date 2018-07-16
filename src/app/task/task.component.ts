import { Component, OnInit, Input, Output } from '@angular/core';
import { Task } from '../todo-form/task.model';
// import { EventEmitter } from '@angular/core';
import { AppState } from '../redux/app.state';
import { Store } from '@ngrx/store';
import { DeleteTask, UpdateTask } from '../redux/task.action';
import { TasksService } from '../redux/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  @Input () task: Task;
  // @Output() deleteTask = new EventEmitter<Task>();
  constructor(private store: Store<AppState>, private service: TasksService) {

  }

  onDelete() {
    // this.deleteTask.emit(this.task);
    // this.store.dispatch(new DeleteTask(this.task));
    this.service.deleteTask(this.task);
  }

  onSolved() {
    // this.task.isSolved = true;
    // this.store.dispatch(new UpdateTask(this.task));
    this.task.isSolved = true;
    this.service.updateTask(this.task);
  }

}

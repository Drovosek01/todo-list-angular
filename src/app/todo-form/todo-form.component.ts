import { Component } from '@angular/core';
import { Task } from './task.model';
import * as moment from 'moment';
import { TasksService } from '../redux/tasks.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  // private id: number = 2;
  taskName: string = '';
  taskDescription: string = '';

  // @Output() addTask = new EventEmitter<Task>();
  constructor(private service: TasksService) { }

  onAdd() {
    if (this.taskName === '') return;

    // this.id = ++this.id;

    const date = moment().format('DD.MM.YY | HH.MM.SS');
    const task = new Task(this.taskName, date, this.taskDescription);

    // this.addTask.emit(task);
    // this.store.dispatch(new AddTask(task));
    this.service.addTask(task);

    this.taskDescription = '';
    this.taskName = '';
  }

  onLoad() {
    this.service.LoadTasks();
  }

}

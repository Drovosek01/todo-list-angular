import { Component, OnInit } from '@angular/core';
import { Task } from './task.model';
import * as moment from 'moment';
import { TasksService } from '../redux/tasks.service';
import { Validator, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  reactiveForm: FormGroup;

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.reactiveForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.minLength(10)]]
    });
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.reactiveForm.controls[controlName];
    const result = control.invalid && control.touched;
    return result;
  }

  onSubmit() {
    const controls = this.reactiveForm.controls;
      if (this.reactiveForm.invalid) {
      Object.keys(controls)
       .forEach(controlName => controls[controlName].markAsTouched());
       return;
      }
  }



  // private id: number = 2;
  taskName: string = '';
  taskDescription: string = '';

  // @Output() addTask = new EventEmitter<Task>();
  constructor(private service: TasksService, private fb: FormBuilder) { }

  onAdd() {
    if (this.taskName === '') return;

    // this.id = ++this.id;

    const date = moment().format('DD.MM.YY | HH.MM.SS');
    const task = new Task(this.taskName, date, this.taskDescription, false);

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

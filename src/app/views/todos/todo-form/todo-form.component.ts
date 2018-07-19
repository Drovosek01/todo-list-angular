import { Component, OnInit } from '@angular/core';
import { Task } from './task.model';
import * as moment from 'moment';
import { TasksService } from '../../../redux/tasks.service';
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
    if (this.reactiveForm.invalid) {
      return;
    }

    const title: string = this.reactiveForm.value.title;
    const description: string = this.reactiveForm.value.description;

      const date = moment().format('DD.MM.YY | HH.MM.SS');
      const task = new Task(title, date, description, false);
      this.service.addTask(task);

      this.reactiveForm.reset();
  }

  // @Output() addTask = new EventEmitter<Task>();
  constructor(private service: TasksService, private fb: FormBuilder) { }

  onLoad() {
    this.service.loadTasks();
  }

}

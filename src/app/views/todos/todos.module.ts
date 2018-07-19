import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TaskComponent } from './task/task.component';
import { AddingTaskComponent } from './adding-task/adding-task.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TodosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    TodoFormComponent,
    TaskComponent,
    AddingTaskComponent,
    TaskDetailsComponent
  ]
})
export class TodosModule { }

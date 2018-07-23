import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TaskComponent } from './task/task.component';
import { AddingTaskComponent } from './adding-task/adding-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TaskSearchPipe } from './task-search.pipe';

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
    TasksListComponent,
    TaskSearchPipe
  ]
})
export class TodosModule { }

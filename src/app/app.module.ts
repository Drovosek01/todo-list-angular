import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TaskComponent } from './task/task.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { tasksReducer } from './redux/tasks.reducer';
import { TasksService } from './redux/tasks.service';
import { HttpModule } from '@angular/http';
import { EffectsModule } from '@ngrx/effects';
import { TasksEffect } from './redux/tasks.effects';
// import { HttpClient } from 'selenium-webdriver/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AddingTaskComponent } from './adding-task/adding-task.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: 'addingTask', component: AddingTaskComponent},
  {path: 'details/:id', component: TaskDetailsComponent},
  {path: '', component: AppComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TaskComponent,
    AddingTaskComponent,
    TaskDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    EffectsModule.forRoot([TasksEffect]),
    StoreModule.forRoot({taskPage: tasksReducer}),
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }

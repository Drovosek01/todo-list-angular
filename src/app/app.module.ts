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

@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    EffectsModule.forRoot([TasksEffect]),
    StoreModule.forRoot({taskPage: tasksReducer}),
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }

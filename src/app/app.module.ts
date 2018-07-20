import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { tasksReducer } from './redux/tasks.reducer';
import { TasksService } from './redux/tasks.service';
import { HttpModule } from '@angular/http';
import { EffectsModule } from '@ngrx/effects';
import { TasksEffect } from './redux/tasks.effects';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TodosModule } from './views/todos/todos.module';
// import { TasksListComponent } from './views/todos/tasks-list/tasks-list.component';

const appRoutes: Routes = [
  // {path: '', component: AppComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    EffectsModule.forRoot([TasksEffect]),
    StoreModule.forRoot({taskPage: tasksReducer}),
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    TodosModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }

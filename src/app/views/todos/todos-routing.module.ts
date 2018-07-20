import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddingTaskComponent } from './adding-task/adding-task.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';

const routes: Routes = [
  {path: 'addingTask', component: AddingTaskComponent},
  {path: 'list', component: TasksListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddingTaskComponent } from './adding-task/adding-task.component';
import { TaskDetailsComponent } from './task-details/task-details.component';

const routes: Routes = [
  {path: 'addingTask', component: AddingTaskComponent},
  {path: 'details', component: TaskDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }

import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { TASK_ACTION, AddTask } from './task.action';
import { Task } from '../views/todos/todo-form/task.model';
import { TasksService } from './tasks.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class TasksEffect {

    constructor(private actions$: Actions, private service: TasksService) {}

    @Effect() loadTasks = this.actions$.ofType(TASK_ACTION.ADD_TASK)
        .switchMap((action: AddTask) => {
            return this.service.preloadTasks();
        })
        .mergeMap((tasks: Task[]) => {
            return [
                {
                    type: TASK_ACTION.LOAD_TASKS,
                    payload: tasks
                }
            ];
        });
}

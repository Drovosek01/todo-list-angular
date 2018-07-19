import { Action } from '@ngrx/store';
import { Task } from '../views/todos/todo-form/task.model';

export namespace TASK_ACTION {
    export const ADD_TASK = 'ADD_TASK';
    export const DELETE_TASK = 'DELETE_TASK';
    export const UPDATE_TASK = 'UPDATE_TASK';
    export const LOAD_TASKS = 'LOAD_TASKS';
}

export class AddTask implements Action {
    readonly type = TASK_ACTION.ADD_TASK;

    constructor(public payload: Task) {}
}

export class DeleteTask implements Action {
    readonly type = TASK_ACTION.DELETE_TASK;

    constructor(public payload: Task) {}
}

export class UpdateTask implements Action {
    readonly type = TASK_ACTION.UPDATE_TASK;

    constructor(public payload: Task) {}
}

export class LoadTasks implements Action {
    readonly type = TASK_ACTION.LOAD_TASKS;

    constructor(public payload: Task[]) {}
}

export type TaskAction = AddTask | DeleteTask | UpdateTask | LoadTasks;

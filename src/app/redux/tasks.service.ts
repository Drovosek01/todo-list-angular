import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Task } from '../todo-form/task.model';
import { LoadTasks, AddTask, DeleteTask, UpdateTask } from './task.action';
import { Observable } from 'rxjs/Observable';
// import { HttpClient } from 'selenium-webdriver/http';
// import { Observable } from 'rxjs';

@Injectable() export class TasksService {

    static BASE_URL: string = 'http://localhost:3000/';

    constructor(private http: Http, private store: Store<AppState>) {}

    preloadTasks(): Observable<Task[]> {
        return this.http.get(TasksService.BASE_URL + 'tasks')
            .map((response: Response) => response.json());
    }

    LoadTasks(): void {
        this.preloadTasks()
        .toPromise()
        .then((tasks: Task[]) => {
            this.store.dispatch(new LoadTasks(tasks));
        });
    }

    addTask(task: Task) {
        this.http.post(TasksService.BASE_URL + 'tasks', task)
            .map((response: Response) => response.json())
            .toPromise()
            .then((task: Task) => {
                this.store.dispatch(new AddTask(task));
            });
    }

    deleteTask(task: Task) {
        this.http.delete(TasksService.BASE_URL + 'tasks/' + task.id)
            .map((response: Response) => response.json())
            .toPromise()
            .then(_ => {
                this.store.dispatch(new DeleteTask(task));
            });
    }

    updateTask(task: Task) {
        this.http.put(TasksService.BASE_URL + 'tasks/' + task.id, task)
            .map((response: Response) => response.json())
            .toPromise()
            .then((task: Task) => {
                this.store.dispatch(new UpdateTask(task));
            });
    }
}

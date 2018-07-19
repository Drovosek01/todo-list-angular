import { Task } from '../views/todos/todo-form/task.model';

export interface AppState {
    taskPage: {
        tasks: Task[]
    };
}

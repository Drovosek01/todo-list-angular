import { Task } from '../todo-form/task.model';

export interface AppState {
    taskPage: {
        tasks: Task[]
    };
}

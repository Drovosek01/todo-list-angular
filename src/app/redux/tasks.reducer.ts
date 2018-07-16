import { TASK_ACTION, AddTask, TaskAction } from './task.action';

const initialState = {
    tasks: []
};

export function tasksReducer(state = initialState, action: TaskAction) {
    switch (action.type) {
        case TASK_ACTION.ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };
        case TASK_ACTION.DELETE_TASK:
            return {
                ...state,
                tasks: [...state.tasks.filter(c => c.id !== action.payload.id)]
            };
        case TASK_ACTION.UPDATE_TASK:
        const idx = state.tasks.findIndex(c => c.id === action.payload.id);
        state.tasks[idx].isSolved = true;
            return {
                ...state,
                task: [...state.tasks]
            };
        case TASK_ACTION.LOAD_TASKS:
            return {
                ...state,
                tasks: [...action.payload]
            };
        default:
        return state;
    }
}

export class Task {
    constructor(
        public name: string,
        public date: string,
        public description: string,
        public isSolved: boolean,
        public id?: number
    ) {}
}

export interface Tasks {
    tasks: Task[];
}

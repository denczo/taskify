export interface Task {
    id: number,
    label: String,
    responsible: number,
    dueDate: String,
    done: boolean
}

export interface Person {
    id: number,
    name: String,
    email: String,
}

export interface TaskContextType {
    tasks: Task[];
    getTasks: () => void;
    // addTask: (task: Task) => void;
    deleteTask: () => void;
}

export interface UiContextType {
    taskId: number;
    popupActive: boolean;
    togglePopup: () => void;
    handleCheckboxChange: (taskId: number) => void;
}
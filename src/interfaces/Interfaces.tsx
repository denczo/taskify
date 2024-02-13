export interface Task {
    id: number,
    label: string,
    responsible: number,
    dueDate: string,
    done: boolean
}

export interface Person {
    id: number,
    name: string,
    email: string,
}

export interface TaskContextType {
    persons: Person[];
    getPersons: () => void;
    tasks: Task[];
    getTasks: () => void;
    // addTask: (task: Task) => void;
    deleteTask: (taskId: number) => void;
}

export interface UiContextType {
    taskId: number;
    popupActive: boolean;
    togglePopup: () => void;
    handleCheckboxChange: (taskId: number) => void;
    parseGermanDate: (dateString: string) => void;
}
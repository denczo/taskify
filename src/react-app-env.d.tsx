/// <reference types="react-scripts" />
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
    editTask: (task: Task) => void;
    addTask: (task: Task) => void;
    deleteTask: (taskId: number) => void;
}

export interface UiContextType {
    taskId: number;
    popupActive: boolean;
    popupAction: PopupAction;
    togglePopup: (popupAction?: PopupAction) => void;
    handleCheckboxChange: (taskId: number) => void;
}

export interface PopupAction{
    name: string,
    action: (task: Task) => void;
}

export enum PopupType{
    ADD = 0,
    EDIT = 1,
}

export interface SelectOption{
    name: string,
    value: number,
}
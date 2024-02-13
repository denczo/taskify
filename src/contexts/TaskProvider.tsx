import { createContext, useContext, useState } from 'react';
import { Person, Task, TaskContextType } from '../react-app-env.d';

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: any }) => {

    const URL_TASKS = "http://localhost:3004/todos"
    const URL_PERSONS = "http://localhost:3004/persons/"

    const [tasks, setTasks] = useState<Task[]>([]);
    const [persons, setPersons] = useState<Person[]>([]);

    const addTask = async (newTask: Task) => {

        try {
            await fetch(URL_TASKS, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newTask),
            });
            const updatedTasks = [...tasks, newTask];
            setTasks(updatedTasks);
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };


    const editTask = async (editedTask: Task) => {
        try {
            await fetch(URL_TASKS + "/" + editedTask.id, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(editedTask)
            });
            const index = tasks.findIndex(task => task.id === editedTask.id);
            const updatedTasks = [...tasks];
            updatedTasks[index] = editedTask;
            setTasks(updatedTasks);
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    const deleteTask = async (taskId: number) => {
        try {
            await fetch(URL_TASKS + "/" + taskId, {
                method: 'DELETE',
            });
            setTasks(tasks?.filter(task => task.id !== taskId));
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    const getTasks = async () => {
        try {
            const response = await fetch(URL_TASKS, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });
            const data = await response.json();
            setTasks(data);
        } catch (error) {
            console.error('Error getting tasks:', error);
        }
    }

    const getPersons = async () => {
        try {
            const response = await fetch(URL_PERSONS, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });
            const data = await response.json();
            setPersons(data);
        } catch (error) {
            console.error('Error getting tasks:', error);
        }
    }

    return (
        <TaskContext.Provider value={{ tasks, getTasks, addTask, editTask, deleteTask, persons, getPersons }}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTaskContext = () => {
    return useContext(TaskContext);
}
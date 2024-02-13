import { createContext, useContext, useState } from 'react';
import { Person, Task, TaskContextType } from '../interfaces/Interfaces';

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: any }) =>{

    const URL_TASKS = "http://localhost:3004/todos/"
    const URL_PERSONS = "http://localhost:3004/persons/"

    const [tasks, setTasks] = useState<Task[]>([]);
    const [persons, setPersons] = useState<Person[]>([]);

    const editTask = (taskId: number, taskEdited: Task) => {
        setTasks((prevTasks) =>
            prevTasks?.map((task) =>
                task.id === taskId ? { ...task, task: task } : task
            )
        );
    };


    const deleteTask = async (taskId: number) => {
        try {
            await fetch(URL_TASKS + taskId, {
                method: 'DELETE',
            });
            setTasks(tasks?.filter(task => task.id !== taskId));
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    // const addTask = async (newTask) => {
    //     try {
    //       const response = await fetch('https://your-api-url/tasks', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(newTask),
    //       });
    //       const data = await response.json();
    //       setTasks([...tasks, data]); // Assuming the server returns the created task with an ID
    //     } catch (error) {
    //       console.error('Error adding task:', error);
    //     }
    //   };

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
        <TaskContext.Provider value={{ tasks, getTasks, deleteTask, persons, getPersons }}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTaskContext = () => {
    return useContext(TaskContext);
}
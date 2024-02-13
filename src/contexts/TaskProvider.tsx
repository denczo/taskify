import React, { createContext, useContext, useState } from 'react';
import { Task, TaskContextType } from '../interfaces/Interfaces';

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: any }) =>{

    const URL = "http://localhost:3004/todos/"
    const [tasks, setTasks] = useState<Task[]>([]);
    const [taskId, setTaskId] = useState<number>(0);
    const [popupActive, setPopActive] = useState<boolean>(false);

    const editTask = (taskId: number, taskEdited: Task) => {
        setTasks((prevTasks) =>
            prevTasks?.map((task) =>
                task.id === taskId ? { ...task, task: task } : task
            )
        );
    };

    const handleCheckboxChange = (taskId: number) => {
        setTaskId(taskId);
    };

    const togglePopup = () => {
        setPopActive(!popupActive);
    }

    const deleteTask = async () => {
        try {
            await fetch(URL + taskId, {
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
            const response = await fetch(URL, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });
            const data = await response.json();
            setTasks(data);
        } catch (error) {
            console.error('Error getting tasks:', error);
        }
    }

    return (
        <TaskContext.Provider value={{ tasks, getTasks, deleteTask }}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTaskContext = () => {
    return useContext(TaskContext);
}
import { useEffect, useState } from "react";
import TabelHeader from "../TabelHeader.tsx/TabelHeader";
import "./Tabel.css";
import Row from "../Row/Row";

interface Task {
    id: number,
    label: String,
    responsible: number,
    dueDate: String,
    done: boolean
}

const Tabel = () => {

    const [tasks, setTasks] = useState<Task[]>([]);

    const fetchData = async () => {
        const response = await fetch('http://localhost:3004/todos/');
        const data = await response.json();
        return data as Task[];
    }

    useEffect(() => {
        const fetchDataAndSetState = async () => {
            try {
                const data = await fetchData();
                setTasks(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchDataAndSetState();
    }, [])

    return (<div className="tabel">
        <TabelHeader />
        <div style={{height: '700px', overflowY: 'scroll', overflowX: 'hidden'}}>
        {tasks.map(task => <Row data={task} key={task.id} />)}
        </div>
    </div>
    );
}

export default Tabel;

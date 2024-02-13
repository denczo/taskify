import { useEffect } from "react";
import TabelHeader from "../TabelHeader.tsx/TabelHeader";
import "./Tabel.css";
import Row from "../Row/Row";
import { useTaskContext } from "../../contexts/TaskProvider";

const Tabel = () => {

    const task = useTaskContext();

    useEffect(() => {
        task?.getTasks();
    }, [])

    return (<div className="tabel">
        <TabelHeader />
        <div style={{ height: '700px', overflowY: 'scroll', overflowX: 'hidden' }}>
            {task?.tasks.map(task => {
                // const person = persons.find(p => p.id === task.responsible);
                // return <Row data={task} person={person ? person.name : task.responsible.toString()} key={task.id} />
                                return <Row data={task} person={task.responsible.toString()} key={task.id} />

            })}
        </div>
    </div>
    );
}

export default Tabel;

import { useEffect } from "react";
import TabelHeader from "../TabelHeader.tsx/TabelHeader";
import "./Tabel.css";
import Row from "../Row/Row";
import { useTaskContext } from "../../contexts/TaskProvider";

const Tabel = () => {

    const task = useTaskContext();
    const matchingPersons = task?.persons;

    useEffect(() => {
        task?.getTasks();
        task?.getPersons();
    }, [])

    return (<div className="tabel">
        <TabelHeader />
        <div style={{ height: '700px', overflowY: 'scroll', overflowX: 'hidden' }}>
            {task?.tasks.map(task => {
                const person = matchingPersons?.find(p => p.id === task.responsible);
                return <Row data={task} person={person ? person.name : task.responsible.toString()} key={task.id} />
            })}
        </div>
    </div>
    );
}

export default Tabel;

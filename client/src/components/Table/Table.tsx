import { useEffect } from "react";
import "./Table.css";
import Row from "../Row/Row";
import { useTaskContext } from "../../contexts/TaskProvider";
import TableHeader from "../TableHeader/TableHeader";

const Table = () => {

    const task = useTaskContext();
    const matchingPersons = task?.persons;

    useEffect(() => {
    }, [task?.tasks])

    return (<div className="table">
        <TableHeader />
            {task?.tasks.map(task => {
                const person = matchingPersons?.find(p => p.id === task.responsible);
                return <Row data={task} person={person ? person.name : task.responsible?.toString()!} key={task.id} />
            })}
        </div>
    );
}

export default Table;

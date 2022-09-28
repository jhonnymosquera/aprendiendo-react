import TaskCard from './TaskCard';
import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskList() {
	const { tasks } = useContext(TaskContext);

	if (tasks.length === 0) {
		return <h1 className="p-2 text-center font-bold up">Sin Tareas</h1>;
	}

	return (
		<div className="grid grid-cols-2 gap-2 p-10">
			{tasks.map((task) => {
				return <TaskCard task={task} key={task.id} />;
			})}
		</div>
	);
}

export default TaskList;

import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskCard({ task }) {
	const { deleteTask } = useContext(TaskContext);

	return (
		<div className="bg-gray-800 text-white rounded-md p-5 text-center">
			<h1 className="mb-1 font-bold uppercase">{task.tittle} </h1>
			<p className="font-bold">{task.description} </p>
			<button className="bg-red-600 p-2 mt-5  rounded-md font-bold hover:bg-red-800" onClick={() => deleteTask(task)}>
				Eliminar Tarea
			</button>
		</div>
	);
}

export default TaskCard;

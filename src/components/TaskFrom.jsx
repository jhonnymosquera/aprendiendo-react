import { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskFrom() {
	const [tittle, setTittle] = useState('');
	const [description, setDescription] = useState('');
	const { createTask } = useContext(TaskContext);

	const handleSubmit = (e) => {
		e.preventDefault();

		createTask({
			tittle,
			description,
		});

		setTittle('');
		setDescription('');
	};

	return (
		<form className="flex flex-col items-center  gap-2 p-4 bg-gray-800 " onSubmit={handleSubmit}>
			<input
				className="p-2 rounded-md text-gray-900  font-bold w-80"
				type="text"
				placeholder="Escribe una tarea"
				onChange={(e) => {
					setTittle(e.target.value);
				}}
				value={tittle}
				autoFocus
			/>

			<textarea
				className="p-2 rounded-md text-gray-900  font-bold w-80"
				placeholder="Descripcion de la tarea"
				onChange={(e) => {
					setDescription(e.target.value);
				}}
				value={description}
			></textarea>
			<button className="bg-green-500 hover:bg-green-200 p-1 w-60 font-bold rounded-md">Guardar</button>
		</form>
	);
}

export default TaskFrom;

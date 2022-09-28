import { createContext, useState, useEffect } from 'react';
import { tasks as data } from '../data/task';

export const TaskContext = createContext();

export function TaskContextProvider(props) {
	const [tasks, setTasks] = useState([]);
	const [id, setId] = useState(data.length);

	function createTask(task) {
		setTasks([
			...tasks,
			{
				tittle: task.tittle,
				id: id,
				description: task.description,
			},
		]);

		setId(id + 1);
	}

	function deleteTask(task) {
		setTasks(tasks.filter((t) => t.id !== task.id));
	}

	useEffect(() => {
		setTasks(data);
	}, []);

	return (
		<TaskContext.Provider
			value={{
				tasks,
				deleteTask,
				createTask,
			}}
		>
			{props.children}
		</TaskContext.Provider>
	);
}

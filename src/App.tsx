import React, { useState } from 'react';
import AddTaskForm from './AddTaskForm.tsx';
import "./App.css"

interface TaskType {
    id: string;
    text: string;
    completed: boolean;
}

const App: React.FC = () => {
    const [tasks, setTasks] = useState<TaskType[]>([
        { id: '1', text: 'Learn React', completed: false },
        { id: '2', text: 'Build a ToDo List', completed: false },
    ]);

    const [currentTask, setCurrentTask] = useState<string>('');

    const addTask = () => {
        if (currentTask.trim() !== '') {
            setTasks([...tasks, { id: Date.now().toString(), text: currentTask, completed: false }]);
            setCurrentTask('');
        }
    };

    const deleteTask = (id: string) => {
        setTasks(tasks.filter(task => task.id !== id));
    };


    return (
        <div>
            <h1>ToDo List</h1>
            <AddTaskForm currentTask={currentTask} setCurrentTask={setCurrentTask} addTask={addTask} />
            <ul className="task-list">

            </ul>
        </div>
    );
};

export default App;
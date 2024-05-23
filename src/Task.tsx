import React, { FC } from 'react';

interface TaskProps {
    task: {
        id: string;
        text: string;
        completed: boolean;
    };
    deleteTask: (id: string) => void;
    toggleTaskCompletion: (id: string) => void;
}

const Task: FC<TaskProps> = ({ task, deleteTask, toggleTaskCompletion }) => {
    return (
        <li className={`task ${task.completed ? 'completed' : ''}`}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
            />
            <span>{task.text}</span>
            <button onClick={() => deleteTask(task.id)}>Удалить</button>
        </li>
    );
};

export default Task;

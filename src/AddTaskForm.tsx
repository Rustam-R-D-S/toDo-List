import React, { ChangeEvent, FC } from 'react';

interface AddTaskFormProps {
    currentTask: string;
    setCurrentTask: (task: string) => void;
    addTask: () => void;
}

const AddTaskForm: FC<AddTaskFormProps> = ({ currentTask, setCurrentTask, addTask }) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentTask(e.target.value);
    };

    return (
        <div className="add-task-form">
            <input
                type="text"
                value={currentTask}
                onChange={handleChange}
                placeholder="Enter new task"
            />
            <button onClick={addTask}>Add</button>
        </div>
    );
};

export default AddTaskForm;
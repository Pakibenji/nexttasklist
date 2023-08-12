import React from 'react';
import { TaskProps } from '../types';
import { AiFillCheckSquare, AiFillDelete } from 'react-icons/ai';
const Task = ({ individualTask , handleDeleteTask, handleCompleteTask }: TaskProps) => {
    return (
        <div className='task'>
            <h3>{individualTask.task}</h3>
        </div>
    );
};

export default Task;
import React from 'react';
import { TaskProps } from '../types';
import { AiFillCheckSquare, AiFillDelete } from 'react-icons/ai';
const Task = ({ individualTask , handleDeleteTask, handleCompleteTask }: TaskProps) => {
    return (
        <div className='task'>
            <h3 className={individualTask.Completed ? "completed" : ""}>{individualTask.task}</h3>
            <div>
            <button className={individualTask.Completed ? "btncompleted" : ""}onClick={() => handleCompleteTask(individualTask._id)}><AiFillCheckSquare/></button>
            <button onClick={() => handleDeleteTask(individualTask._id)}><AiFillDelete/></button>
            </div>
        </div>
    );
};

export default Task;
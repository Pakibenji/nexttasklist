import React from 'react'
import { SiAddthis } from 'react-icons/si'

import {AddTaskProps} from '../types'

function AddTask({task, setTask, handleCreateTask}: AddTaskProps) {
  return (
    <div className='addtask-container'>
    <input type="text" placeholder='Nouvelle tache' onChange={(e) => setTask(e.target.value)} value={task} className='task-input' />
    <button  className="task-btn"onClick={() => handleCreateTask}><SiAddthis/></button>
    </div>
  )
}

export default AddTask
import React from 'react'
import TaskItem from './TaskItem';

const TaskList = (props) => {
    const {tasks} = props;
  return (
    <ul>
        {tasks.map(task => (
            <TaskItem key={task.id} task={task} />
        ))}
    </ul>
  )
}

export default TaskList
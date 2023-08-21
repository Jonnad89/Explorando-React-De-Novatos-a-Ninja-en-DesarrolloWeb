import React from 'react'

const TaskItem = (props) => {
    const {task} = props;
  return <li>{task.text}</li>
}

export default TaskItem
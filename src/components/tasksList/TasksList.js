import React from 'react';
import Task from '../task/Task.js'

function TasksList(props) {
   // const sayHello = () =>{ alert("hello")}

  return (
    <div className="TaskList">
     {props.Tasks.map((task , index )=> (
        <Task key={index}  title={task.title} duration={task.duration} details = {task.details} >
          {task.description}
</Task>
      ))
     }

    </div>
  );
}

export default TasksList;

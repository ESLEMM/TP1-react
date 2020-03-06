import React from 'react'
import './Task.css'


function Task (props){
  console.log('props: ', props);

    return (
    <div className='task'>
      <p> <span onClick={props.sayHello} > {props.title} </span>( {props.duration} min)</p> 
      <p>{props.details.type} - {props.details.date}</p>
      {props.children}
      <p className="del">
      <a href="">delete</a>
      <a href="">update</a></p>
    </div>
    )
}

export default Task

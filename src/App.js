import React from 'react';
import './App.css';
import TaskForm from './components/taskform/Taskform.js';
import TasksList from './components/tasksList/TasksList.js'

function App() {
  const tabTasks =[
    {
      title:"learn html" ,
      duration :60,
      details : {type: "IT", date: "2020-03-06"},
      description : "ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg"
     } ,
     {
      title:"learn html" ,
      duration :60,
      details : {type: "IT", date: "2020-03-06"},
      description : "ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg"
     } ,
     {
      title:"learn html" ,
      duration :60,
      details : {type: "IT", date: "2020-03-06"}  ,
      description : "ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg" 
}]
  return (
    <div className="App">
     <TaskForm />
    <TasksList Tasks={tabTasks}/>
    </div>
  );
}

export default App;

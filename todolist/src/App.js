import React,{Component} from 'react';
import Todoinput from './components/Todoinput';
import Todolist from './components/Todolist';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      Hello from main app
      <Todoinput></Todoinput>
      <Todolist></Todolist>
    </div>
    
  );
}

export default App;

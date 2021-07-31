import React,{Component} from 'react';
import Todoinput from './components/Todoinput';
import Todolist from './components/Todolist';
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from 'uuid';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">todo input</h3>
          <Todoinput></Todoinput>
          <Todolist></Todolist>
        </div>
      </div>
     
    </div>
    
  );
}

export default App;

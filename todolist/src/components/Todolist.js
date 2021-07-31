import React, { Component } from 'react'
import Todoitem from './Todoitem'



export default class Todolist extends Component {
    render() {
        return (
           <ul className="list-group my-5">
               <h3 className="text-capitalize text-center">Todo list</h3>
               <Todoitem></Todoitem>
               <button className="btn btn-danger btn-block text-capitalize mt-5">Translate</button>
           </ul>
        )
    }
}

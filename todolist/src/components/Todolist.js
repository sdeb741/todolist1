import React, { Component } from 'react'
import Todoitem from './Todoitem'



export default class Todolist extends Component {
    render() {
        const {items,clearList}=this.props
        return (

           <ul className="list-group my-5">
               <h3 className="text-capitalize text-center">Todo list</h3>
            {
                items.map(item=>{
                    return(
                        <Todoitem key={item.id} title={item.title}></Todoitem>
                    )
                })
            }
               
               <button className="btn btn-danger btn-block text-capitalize mt-5" onClick={clearList}>Clear List</button>
           </ul>
        )
    }
}

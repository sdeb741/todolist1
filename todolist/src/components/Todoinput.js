import React, { Component } from 'react'

export default class Todoinput extends Component {
    render() {
        const {item,handleChange,handleSubmit,editItem}=this.props
        return <div className="card card-body my-3">
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input=group-text bg-primarytext-white">
                            <i className="fas fa-book"></i>
                        </div>
                    </div>
                    <input type="text" className="form-control text-capitalize" placeholder="add a todo item" 
                    value={item} onChange={handleChange}></input>
                </div>
                <button type="submit" className={editItem?"btn w-100 btn-success mt-3":"btn w-100 btn-primary mt-3"}>{editItem?"Edit item":"Add item" }</button>
            </form>
            
        </div>

    }
}

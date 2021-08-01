import React, { Component } from 'react'

export default class Todoinput extends Component {
    render() {
        const {item,handleChange,handleSubmit}=this.props
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
                <button type="submit" className="btn w-100 btn-primary mt-3">Add item</button>
            </form>
            
        </div>

    }
}

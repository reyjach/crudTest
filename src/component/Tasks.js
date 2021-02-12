import React, { Component } from 'react'

export default class tasks extends Component {

  deleteTask = () =>{
    this.props.delateTask(this.props.info.id);
  }
  editTask = () => {
    const {id, name} = this.props.info; 

    const newTask = {
      id,
      name
    };
    
  
    this.props.editTask(newTask);
  }

    render() {
        
        const {id, name} = this.props.info;
        return (

            <div>
                <li className="list-group-item" key={id}>
                    <span className="lead">{name}</span>
                    <button 
                      className="btn btn-danger btn-sm float-right mx-2" 
                      onClick={() => this.deleteTask()}>
                        Eliminar
                      </button>
                    <button 
                      className="btn btn-warning btn-sm float-right" 
                      onClick={() => this.editTask()}>
                        Editar
                    </button>
                  </li>
            </div>
        )
    }
}

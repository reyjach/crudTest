import React, { Component } from 'react';
import shortid from 'shortid';

class createTask extends Component {

    taskRef = React.createRef();

    state = {
        error : false
    }

    

    createNewTask = e => {
        e.preventDefault();
        
        const task = this.taskRef.current.value;
        console.log(task)

        if (task === ''){
            this.setState({
                error: true
            })
            return;
        }

        const newTask = {
            id: shortid.generate(),
            name: task
        } 
        
        this.props.addTask(newTask);
        e.currentTarget.reset();

        this.setState ({
            error : false
        });
    }

    saveTask = (e) => {
        e.preventDefault();

        const task = this.taskRef.current.value;

        if (task === ''){
            this.setState({
                error: true
            })
        }

        const {id} = this.props.editTask; 

        this.props.saveTask(task, id);

        e.currentTarget.reset();

        this.setState ({
            error : false
        });

    }

    render() {

        const editeMode = this.props.editeMode;
 

        let {name} = this.props.editTask;
        

        const error = this.state.error;
        

        //const mensaje = Object.keys(citas).length === 0 ? 'No hay Citas':'Administrar tus Citas Aqui';
        
        return (
            <div>
                <h4 
                    className="text-center">
                    {editeMode ? " Modificar tarea" : "Agregar tarea"}
                </h4>
                <form onSubmit={editeMode ? this.saveTask : this.createNewTask}>
                    
                    <input 
                    type="text" 
                    className="form-control mb-2" 
                    placeholder="Ingresa la tarea..."
                    ref={this.taskRef}
                    defaultValue={name || ''}
                    >
                    </input>
                    <button 
                    className= {editeMode ? "btn btn-warning btn-block" : "btn btn-dark btn-block"} 
                    type="submit">
                    {editeMode ? "Guardar" : "Agregar"}
                    </button>
                </form>
                {error ? <div className="alert alert-danger text-center">El campo es obligatorios</div> : ''}
            </div>
        )
    }
}

export default createTask;



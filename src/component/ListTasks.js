import React, { Component } from 'react';
import Tasks from './Tasks';


export default class listTasks extends Component {
    render() {
        
        return (
            <div>
                <h4 className="text-center">Listas de Tareas</h4>
                
                <ul className="list-group">
              
                {Object.keys(this.props.tasks).map(task => (
                    <Tasks 
                        key={task}
                        info={this.props.tasks[task]}
                        delateTask={this.props.delateTask}
                        editTask={this.props.editTask}
                    >   
                    </Tasks>
                ))}
                
                </ul>
            
            </div>
        )
    }
}

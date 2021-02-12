
import React ,{Component} from 'react';
import ListTasks from './component/ListTasks';
import CreateTask from './component/CreateTask';

class App extends Component {

  state = {
    tasks: [],
    editeMode: false,
    editTask: []
  } 

   addTask = (newTask) => {
    
    const tasks = [...this.state.tasks, newTask]
                                              
    this.setState ({
      tasks
    })
    
  }

   delateTask = (id) => {
    const tasksNow = [...this.state.tasks];

    const tasks = tasksNow.filter(task => task.id !== id); 
          
    this.setState({
      tasks
    });
  }

  editTask = (theTask) => {
    
    this.setState({
      editTask: theTask,
      editeMode: true
    })

  }

  saveTask = (task, id) => {

    const tasksNow = [...this.state.tasks];
    const editedTasks = tasksNow.map(item => item.id === id? {id, name: task}: item );

    this.setState({
      tasks: editedTasks,
      editeMode: false,
      editTask: []
    })
    //setTasks(editedTasks);
    //setEditeMode(false);
    //setTask("");
    //setId("");
  }
  render(){

  
  return (
    <div className="container mt-5">
      <h1>Tareas</h1>
      <hr></hr>
      <div className="row">
        <div className="col-8">
         <ListTasks 
          tasks={this.state.tasks} 
          delateTask={this.delateTask} 
          editTask={this.editTask}>
          </ListTasks>
        </div>
        <div className="col-4">
          <CreateTask 
            addTask={this.addTask} 
            tasks={this.state.tasks}
            editeMode={this.state.editeMode}
            editTask= {this.state.editTask}
            saveTask={this.saveTask}>
          </CreateTask>
        </div>
      </div>
    </div>
  );
  }
}

export default App;

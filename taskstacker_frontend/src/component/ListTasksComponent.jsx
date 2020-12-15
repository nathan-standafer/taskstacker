import React, { Component } from 'react';
import TaskDataService from '../service/TaskDataService';

//var INSTRUCTOR = 'in28minutes';

class ListTasksComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tasks: [],
            message: null
        }

        this.refreshTasks = this.refreshTasks.bind(this)

    }
    
    componentDidMount() {
        this.refreshTasks();
    }

    refreshTasks() {
        TaskDataService.retrieveAllTasks()
            .then(
                response => {
                    console.log("All tasks response" + response.data._embedded.tasks);
                    this.setState({tasks: response.data._embedded.tasks})
                }
            )

    }

    render(props) {
        return (
            <div className="container">
                <h3>All Tasks</h3>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>taskName</th>
                                <th>durationHours</th>
                                <th>startDate</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.tasks.map(
                                    (task) => 
                                        <tr key={task.taskName}>
                                            <td>{task.taskName}</td>
                                            <td>{task.durationHours}</td>
                                            <td>{task.startDate}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}

export default ListTasksComponent
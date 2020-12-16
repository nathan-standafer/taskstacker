import React, { Component } from 'react';
import TaskDataService from '../service/TaskDataService';
import moment from 'moment'


class ListTasksComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tasks: [],
            message: null
        }

        this.refreshTasks = this.refreshTasks.bind(this)
        this.addTaskClicked = this.addTaskClicked.bind(this)

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

    addTaskClicked() {
        this.props.history.push(`/tasks/-1`)
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
                                <th>dueDate</th>
                                <th>managementImportance</th>
                                <th>businessImportance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.tasks.map(
                                    (task) => 
                                        <tr key={task.taskId}>
                                            <td>{task.taskId}</td>
                                            <td>{task.taskName}</td>
                                            <td>{task.durationHours}</td>
                                            <td>{moment(task.startDate).format('MMM Do YYYY')}</td>
                                            <td>{moment(task.dueDate).format('MMM Do YYYY')}</td>
                                            <td>{task.managementImportance}</td>
                                            <td>{task.businessImportance}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <div className="row">
                    <button className="btn btn-success" onClick={this.addTaskClicked}>Add</button>
                </div>
            </div>
        )
    }

}

export default ListTasksComponent
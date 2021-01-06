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
        this.updateTaskClicked = this.updateTaskClicked.bind(this)
        this.deleteTaskClicked = this.deleteTaskClicked.bind(this)
    }
    
    componentDidMount() {
        this.refreshTasks();
    }

    refreshTasks() {
        TaskDataService.retrieveAllTasks()
            .then(
                response => {
                    let loadedTasks = response.data._embedded.tasks;
                    loadedTasks.sort(this.compareTasks)
                    this.setState({tasks: loadedTasks});
                }
            )
    }

    compareTasks(task1, task2)
    {
        let workday_count = (start,end) => {
            let first = start.clone().endOf('week'); // end of first week
            let last = end.clone().startOf('week'); // start of last week
            let days = last.diff(first,'days') * 5 / 7; // this will always multiply of 7
            let wfirst = first.day() - start.day(); // check first week
            if(start.day() === 0) --wfirst; // -1 if start with sunday 
            let wlast = end.day() - last.day(); // check last week
            if(end.day() === 6) --wlast; // -1 if end with saturday
            return wfirst + Math.floor(days) + wlast; // get the total
          } //              ^ EDIT: if days count less than 7 so no decimal point

        let work_days_1 = workday_count(moment(), moment(task1.dueDate));
        let work_days_2 = workday_count(moment(), moment(task2.dueDate));
        let work_hours_1 = work_days_1 * 8.0;
        let work_hours_2 = work_days_2 * 8.0;

        let percent_of_remaining_time_1 = 100.0 * (1-task1.percentComplete/100.0)*parseFloat(task1.durationHours) / work_hours_1;
        let percent_of_remaining_time_2 = 100.0 * (1-task2.percentComplete/100.0)*parseFloat(task2.durationHours) / work_hours_2;

        //console.log("percent_of_remaining_time_" + task1.taskId + ": " + percent_of_remaining_time_1);
        //console.log("percent_of_remaining_time_" + task2.taskId + ": " + percent_of_remaining_time_2);

        let weight_task_1 = percent_of_remaining_time_1 + parseFloat(task1.perceivedImportance) + parseFloat(task1.businessImportance);
        let weight_task_2 = percent_of_remaining_time_2 + parseFloat(task2.perceivedImportance) + parseFloat(task2.businessImportance);

        //console.log("weight_task_" + task1.taskId + ": " + weight_task_1);
        //console.log("weight_task_" + task2.taskId + ": " + weight_task_2);

         if (task1.percentComplete == 100 && task2.percentComplete < 100) {
             return 1;
         }

         if (task1.percentComplete < 100 && task2.percentComplete == 100) {
             return -1;
         }

        if(weight_task_1 > weight_task_2)
        {
            return -1;
        }
        else if(weight_task_1 < weight_task_2)
        {
            return 1;
        }
        return 0;
    }

    updateTaskClicked(taskId) {
        this.props.history.push("/tasks/" + taskId);
    }

    deleteTaskClicked(taskId) {
        TaskDataService.deleteTask(taskId)
            .then(() => {
                this.props.history.push('/tasks');
                this.refreshTasks();
            })
    }

    addTaskClicked() {
        this.props.history.push(`/tasks/-1`)
    }

    render(props) {
        return (
            <div className="container">
                <h3>All Tasks</h3>
                <table className="table">
                    <thead>
                        <tr>
                            {/* <th>Task Id</th> */}
                            <th>Task Name</th>
                            <th>Duration</th>
                            <th>% Complete</th>
                            {/* <th>Start Date</th> */}
                            <th>Due Date</th>
                            <th>Perceived Importance</th>
                            <th>Business Importance</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.tasks.map(
                                (task) => 
                                    <tr key={task.taskId}>
                                        {/* <td>{task.taskId}</td> */}
                                        <td>{task.taskName}</td>
                                        <td>{task.durationHours} Hours</td>
                                        <td>{task.percentComplete}%</td>
                                        {/* <td>{moment(task.startDate).format('MMM Do YYYY h:mm a')}</td> */}
                                        <td>{moment(task.dueDate).format('MMM Do YYYY h:mm a')}</td>
                                        <td>{task.perceivedImportance}</td>
                                        <td>{task.businessImportance}</td>
                                        <td><button className="btn btn-success" onClick={() => this.updateTaskClicked(task.taskId)}>Update</button></td>
                                        <td><button className="btn btn-warning" onClick={() => this.deleteTaskClicked(task.taskId)}>Delete</button></td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
                <div className="row">
                    <button className="btn btn-success" onClick={this.addTaskClicked}>Add</button>
                </div>
            </div>
        )
    }

}

export default ListTasksComponent
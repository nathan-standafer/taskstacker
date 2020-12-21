import React, { Component } from 'react'
import TaskDataService from '../service/TaskDataService'
import PrioDropdown from './PrioDropdown'
import DateTimePicker from  './DateTimePicker'
import { Formik, Form, Field, ErrorMessage } from 'formik';

class TaskComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: parseInt(this.props.match.params.id),
            task: {}
        }

        this.handleTaskNameChange = this.handleTaskNameChange.bind(this)
        this.handleDurationHoursChange = this.handleDurationHoursChange.bind(this)
        this.handleManagementImportance = this.handleManagementImportance.bind(this)
        this.handleBusinessImportance = this.handleBusinessImportance.bind(this)
        this.handleStartDate = this.handleStartDate.bind(this)
        this.handleDueDate = this.handleDueDate.bind(this)

        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {
        if (this.state.id === -1) {

            let initDate = (new Date()).toISOString();
            this.setState({
                startDate: initDate,
                dueDate: initDate
            });

            return;
        }

        TaskDataService.retrieveTask(this.state.id)
            .then(response => this.setState({
                id: response.data.taskId,
                taskName: response.data.taskName,
                durationHours: response.data.durationHours,
                startDate: response.data.startDate,
                dueDate: response.data.dueDate,
                managementImportance: response.data.managementImportance,
                businessImportance: response.data.businessImportance,

                task: response.data
            }))
    }

    onSubmit(values) {
        let task = {
            taskId: this.state.id,
            taskName: values.taskName,
            durationHours: values.durationHours,
            startDate: values.startDate,
            dueDate: values.dueDate,
            managementImportance: values.managementImportance,
            businessImportance: values.businessImportance
        }

        //console.log("submitting task to DB values: " + JSON.stringify(values));
        //console.log("submitting task to DB task: " + JSON.stringify(task));

        if (this.state.id === -1) {
            TaskDataService.createTask(task)
                .then(() => this.props.history.push('/tasks'))
        } else {
            TaskDataService.updateTask(task)
                .then(() => this.props.history.push('/tasks'))
        }
    }

    handleTaskNameChange = (val) => {
        let taskName = this.state.taskName;
        taskName = val.target.value
        this.setState({taskName})
    }

    handleDurationHoursChange = (val) => {
        let durationHours = this.state.durationHours;
        durationHours = val.target.value
        this.setState({durationHours})
    }

    handleManagementImportance = (prio) => {
        let managementImportance = this.state.managementImportance;
        managementImportance = parseInt(prio)
        this.setState({managementImportance})
    }

    handleBusinessImportance = (prio) => {
        let businessImportance = this.state.businessImportance;
        businessImportance = parseInt(prio)
        this.setState({businessImportance})
    }

    handleStartDate = (dt) => {
        let startDate = this.state.startDate;
        startDate = dt.toISOString();
        this.setState({startDate})
    }

    handleDueDate = (dt) => {
        let dueDate = this.state.dueDate;
        dueDate = dt.toISOString();
        this.setState({dueDate})
    }

    render() {
        let { id, task } = this.state

        return (
            <div>
                <h3>Task</h3>

                <div classname="container">
                    <Formik
                        initialValues={{id: id, 
                                        taskName:this.state.taskName, 
                                        durationHours: this.state.durationHours, 
                                        startDate: this.state.startDate, 
                                        dueDate: this.state.dueDate, 
                                        managementImportance: this.state.managementImportance, 
                                        businessImportance: this.state.businessImportance}}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        // validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (errors) => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label>Id</label>
                                        <Field className="form-control" type="text" name="id" disabled />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>TaskName</label>
                                        <Field className="form-control" type="text" name="taskName" onChange={this.handleTaskNameChange}/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>durationHours</label>
                                        <Field className="form-control" type="text" name="durationHours" onChange={this.handleDurationHoursChange}/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>startDate</label>
                                        <DateTimePicker zuluDate={this.state.startDate} onSelectDate={this.handleStartDate}/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>dueDate</label>
                                        <DateTimePicker zuluDate={this.state.dueDate} onSelectDate={this.handleDueDate}/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>managementImportance</label>
                                        <fieldset className="form-inline">
                                            <Field className="form-control" type="text" name="managementImportance" />
                                            <PrioDropdown onSelectPrio={this.handleManagementImportance}/>
                                        </fieldset>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>businessImportance</label>
                                        <fieldset className="form-inline">
                                            <Field className="form-control" type="text" name="businessImportance" />
                                            <PrioDropdown onSelectPrio={this.handleBusinessImportance} style="display: inline-block"/>
                                        </fieldset>
                                    </fieldset>

                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }
}

export default TaskComponent
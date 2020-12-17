import React, { Component } from 'react'
import TaskDataService from '../service/TaskDataService'
import { Formik, Form, Field, ErrorMessage } from 'formik';


class TaskComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            task: {}
        }

        this.onSubmit = this.onSubmit.bind(this)

    }

    componentDidMount() {
        if (this.state.id === -1) {
            return
        }

        TaskDataService.retrieveTask(this.state.id)
            .then(response => this.setState({
                id: response.data.taskId,
                taskName: response.data.taskName,
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
            businessImportance: values.businessImportance,
        }

        if (this.state.id === -1) {
            TaskDataService.createTask(task)
                .then(() => this.props.history.push('/tasks'))
        } else {
            TaskDataService.updateTask(task)
                .then(() => this.props.history.push('/tasks'))
        }
    }

    render() {
        let { id, task } = this.state
        let taskName = task.taskName
        let durationHours = task.durationHours
        let startDate = task.startDate
        let dueDate = task.dueDate
        let managementImportance = task.managementImportance
        let businessImportance = task.businessImportance

        return (
            <div>
                <h3>Task</h3>

                <div classname="container">
                    <Formik
                        initialValues={{id, taskName, durationHours, startDate, dueDate, managementImportance, businessImportance}}
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
                                        <Field className="form-control" type="text" name="taskName" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>durationHours</label>
                                        <Field className="form-control" type="text" name="durationHours" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>startDate</label>
                                        <Field className="form-control" type="text" name="startDate" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>dueDate</label>
                                        <Field className="form-control" type="text" name="dueDate" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>managementImportance</label>
                                        <Field className="form-control" type="text" name="managementImportance" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>businessImportance</label>
                                        <Field className="form-control" type="text" name="businessImportance" />
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
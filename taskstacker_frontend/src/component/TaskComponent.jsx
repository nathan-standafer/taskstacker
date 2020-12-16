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
                        // onSubmit={this.onSubmit}
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
                                        <Field className="form-control" type="text" name="task.taskName" disabled />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>durationHours</label>
                                        <Field className="form-control" type="text" name="durationHours" disabled />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>durationHours</label>
                                        <Field className="form-control" type="text" name="startDate" disabled />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>durationHours</label>
                                        <Field className="form-control" type="text" name="dueDate" disabled />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>durationHours</label>
                                        <Field className="form-control" type="text" name="managementImportance" disabled />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>durationHours</label>
                                        <Field className="form-control" type="text" name="businessImportance" disabled />
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
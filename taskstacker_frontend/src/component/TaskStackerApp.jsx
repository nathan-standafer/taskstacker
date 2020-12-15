import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TaskComponent from './TaskComponent';
import ListTasksComponent from './ListTasksComponent';


class TaskStackerApp extends Component {
    render() {
        return (
            <Router>
                <>
                    <h1>TaskStackerApp</h1>
                    <Switch>
                        <Route path="/" exact component={TaskComponent} />
                        <Route path="/tasks" exact component={ListTasksComponent} />
                    </Switch>
                </>
            </Router>
        )
    }
}

export default TaskStackerApp
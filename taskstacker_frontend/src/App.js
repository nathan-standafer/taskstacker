import React, { Component } from 'react';
import './App.css';
import TaskStackerApp from './component/TaskStackerApp';

class App extends Component {
  render() {
    return (
      <div className="container">
        <TaskStackerApp />
      </div>
    );
  }
}

export default App;

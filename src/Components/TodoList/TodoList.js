import React, { Component } from 'react';
import Lists from '../List/List';
import NewTask from '../NewTask/NewTask';

const shortid = require('shortid');

class TodoList extends Component {
  state = { tasks: [], query: '' };

  componentDidMount() {
    if (localStorage.getItem('tasks')) {
      this.setState({ tasks: JSON.parse(localStorage.getItem('tasks')) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { tasks } = this.state;
    if (prevState.tasks !== tasks) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  handleAddTask = task => {
    const newTask = {
      id: shortid.generate(),
      date: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
      ...task,
    };

    this.setState(state => ({ tasks: [...state.tasks, newTask] }));
  };

  render() {
    const { tasks } = this.state;
    return (
      <section>
        <Lists tasks={tasks} />
        <NewTask addTask={this.handleAddTask} />
      </section>
    );
  }
}

export default TodoList;

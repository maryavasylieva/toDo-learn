import React, { Component } from "react";
import NewTask from "../NewTask/NewTask";
import ListItem from "../ListItem/ListItem";

const shortid = require("short-id");

class TodoList extends Component {
  state = { tasks: [], query: "" };

  componentDidMount() {
    if (localStorage.getItem("tasks")) {
      this.setState({ tasks: JSON.parse(localStorage.getItem("tasks")) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { tasks } = this.state;
    if (prevState.tasks !== tasks) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }

  handleAddTask = task => {
    console.log("task:", task);
    const newTask = {
      id: shortid.generate(),
      date: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
      ...task
    };

    this.setState(state => ({ tasks: [...state.tasks, newTask] }));
  };

  handleDeleteTask = id => {
    this.setState(state => ({
      tasks: state.tasks.filter(task => task.id !== id)
    }));
  };

  handlePriorityChange = priority => {
    console.log("priority:", priority);
    this.setState(state => ({
      tasks: state.tasks.map(task => {
        return task.id === priority.id ? { ...task, priority } : task;
      })
    }));
  };

  handleEditTask = updatedTask => {
    this.setState(state => ({
      tasks: state.tasks.map(task => {
        return task.id === updatedTask.id ? { ...task, ...updatedTask } : task;
      })
    }));
  };

  render() {
    const { tasks } = this.state;
    return (
      <section>
        <ListItem
          tasks={tasks}
          handleDeleteTask={this.handleDeleteTask}
          handleEditTask={this.handleEditTask}
          handlePriorityChange={this.handlePriorityChange}
        />
        <NewTask addTask={this.handleAddTask} />
      </section>
    );
  }
}

export default TodoList;

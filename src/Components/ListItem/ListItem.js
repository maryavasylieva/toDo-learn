import React, { Component } from "react";
import Lists from "../List/List";
import EditForm from "../EditForm/EditForm";

class ListItem extends Component {
  state = {
    isOpen: false,
    task: this.props.task,
  };

  handleEditForm = () => {
    const { task } = this.state;
    console.log("task:", task)
    this.setState({ isOpen: true, ...task });
  };

  render() {
    const { isOpen, task } = this.state;
    console.log("this.state:", this.state);
    const { handleEditTask} = this.props;
    console.log("this.props:", this.props);
    return (
      <div>
        {isOpen ? (
          <EditForm {...task} handleEditTask={handleEditTask} />
        ) : (
          <Lists
            {...this.props}
            {...this.state}
            handleEditForm={this.handleEditForm}
          />
        )}
      </div>
    );
  }
}

export default ListItem;

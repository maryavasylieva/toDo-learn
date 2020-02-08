import React, { Component } from "react";
import Lists from "../List/List";
import EditForm from "../EditForm/EditForm";

class ListItem extends Component {
  state = {
    isOpen: false,
    task: {}
  };

  handleEditForm = task => {
    console.log("task is here:", task);
    this.setState({ isOpen: true, task });
  };

  render() {
    const { isOpen } = this.state;
    console.log("this.state:", this.state);
    const { handleEditTask } = this.props;
    console.log("this.props:", this.props);
    return (
      <div>
        {isOpen ? (
          <EditForm handleEditTask={handleEditTask} />
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

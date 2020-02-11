import React, { Component } from 'react';
import Lists from '../List/List';
import EditForm from '../EditForm/EditForm';

class ListItem extends Component {
  state = {
    isOpen: false,
    task: {},
  };

  handleCloseEdit = () => this.setState({ isOpen: false });

  handleEditForm = task => {
    this.setState({ isOpen: true, task });
  };


  render() {
    const { isOpen, task } = this.state;
    const { handleEditTask } = this.props;

    return (
      <div>
        {isOpen ? (
          <EditForm
            task={task}
            handleEditTask={handleEditTask}
            handleCloseEdit={this.handleCloseEdit}
          />
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

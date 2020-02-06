import React, { Component } from 'react';
import Lists from '../List/List';
import EditForm from '../EditForm/EditForm';

class ListItem extends Component {
  state = { isOpen: false };

  handleEditForm = () => this.setState({ isOpen: true });

  render() {
    const { isOpen } = this.state;
    const { id, title, description, content, priority, handleEditTask } = this.props;
    return (
      <div>
        {isOpen ? (
          <EditForm
            title={title}
            description={description}
            priority={priority}
            id={id}
            content={content}
            handleEditTask={handleEditTask}
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

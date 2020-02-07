import React, { Component } from "react";
import Lists from "../List/List";
import EditForm from "../EditForm/EditForm";

class ListItem extends Component {
  state = {
    isOpen: false,
    id: this.props.id,
    title: this.props.title,
    description: this.props.description,
    content: this.props.content,
    priority: this.props.priority
  };
  // солнышко большая беда, видимо с пропсами у меня большая проблема
  // я так и не поняла куда их надо ставить, я сетю isOpen, как я поняла в этом хэндлере? ведь так? или я опять что то не понимаю...😢😥
  // а еще глянь EditForm правильно ли я воспользавалась хоком

  handleEditForm = () => this.setState({ isOpen: true});

  render() {
    const { isOpen, title, description, priority, id, content } = this.state;
    console.log(this.state);
    const { handleEditTask } = this.props;
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
